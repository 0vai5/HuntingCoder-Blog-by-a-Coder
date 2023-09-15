const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./models/User");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY || "default_secret_key"; // Use process.env to access environment variables
const cookieParser = require("cookie-parser");

const saltRounds = 10;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://rovais53:mba21345@cluster0.kshqwu8.mongodb.net/your-database-name",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.post("/Register", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(Password, saltRounds);
    const userDoc = await User.create({ Email, Password: hashedPassword });

    // Create a JWT token
    const token = jwt.sign({ userId: userDoc._id }, secretKey);

    // Set the token as a cookie
    res.cookie("token", token, { httpOnly: true });

    res.json({ user: userDoc, token });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
      const token = jwt.sign({ userId: user._id }, secretKey);

      // Set the token as a cookie
      res.cookie("token", token, { httpOnly: true });

      res.json({ message: "Login successful", token });
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
