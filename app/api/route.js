const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./models/User");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const saltRounds = 10;
const secretKey = "asdfe45we45w345wegw345werjktjwertkj";
app.use(cors({
  origin: "http://localhost:3000", // Replace with the actual URL of your frontend application
  credentials: true, // Allow cookies and other credentials to be included
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://rovais53:mba21345@cluster0.kshqwu8.mongodb.net/your-database-name"
);

const generateToken = (userId) => {
  return jwt.sign({ userId }, secretKey, {});
};


const authenticateUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        // Invalid token
        res.clearCookie("jwt"); // Clear the cookie
        return next();
      }
      // Token is valid, you can also set user information in req.locals if needed
      return next();
    });
  } else {
    next(); // No token found, continue to the next middleware or route
  }
};

app.use(authenticateUser); 

app.get("/checkLoginStatus", authenticateUser, (req, res) => {
  // If the middleware passed, it means the user is authenticated
  res.sendStatus(200);
});




// Logout route
// app.post("/Logout", (req, res) => {
//   res.clearCookie("jwt"); // Clear the JWT cookie to log the user out
//   res.json({ message: "Logged out successfully" });
// });









app.post("/Register", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(Password, saltRounds);
    const userDoc = await User.create({
      Email,
      Password: hashedPassword,
    });
    res.json(userDoc);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json(e);
  }
});

app.post("/Login", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const user = await User.findOne({ Email });

    if (!user) {
      res.status(401).json({ error: "User not found" });
      return;
    }

    const passwordMatch = await bcrypt.compare(Password, user.Password);

    if (passwordMatch) {
      const token = generateToken(user._id);
      res.cookie("jwt", token).json({
        id: user._id,
        message: "Login successful",
      });
    } else {
      res.status(401).json({ error: "Authentication failed" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





app.listen(4000, () => {
  console.log("Server is running on port 4000");
});



