const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./models/User");
const post = require("./models/post");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const saltRounds = 10;
const secretKey = "asdfe45we45w345wegw345werjktjwertkj";

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with the actual URL of your frontend application
    credentials: true, // Allow cookies and other credentials to be included
  })
);

app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://rovais53:mba21345@cluster0.kshqwu8.mongodb.net/your-database-name", // Replace 'your-database-name' with the actual database name
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Logout route (if needed)
// app.post("/Logout", (req, res) => {
//   res.clearCookie("token"); // Clear the JWT cookie to log the user out
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
    res.status(500).json({ error: "Error creating user" });
  }
});

app.post("/Login", async (req, res) => {
  const { Email, Password } = req.body;

  const userDoc = await User.findOne({ Email });
  if (!userDoc) {
    return res.status(401).json({ error: "Authentication failed" });
  }

  const passwordMatch = await bcrypt.compare(Password, userDoc.Password);

  if (passwordMatch) {
    const token = jwt.sign({ Email, id: userDoc.id }, secretKey, {});

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .json({ message: "Login successful" });
  } else {
    res.status(401).json({ error: "Authentication failed" });
  }
});


app.post("/Logout", (req, res) => {
    res.cookie('token', "").json('ok')
  });

// ... Other imports and configurations

// Update the CORS configuration
app.use(cors({ origin: "*", credentials: true }));

// ... Database connection and other middleware

app.get("/Profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secretKey, (err, info) => {
    if (err) {
      res.status(401).json({ error: "Invalid token" });
    } else {
      res.json(info);
    }
  });
});

app.post("/Post", uploadMiddleware.single('files'), async (req, res) => {
  try {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { title, summary, content } = req.body;
    const postDoc = await post.create({
      title,
      summary,
      content,
      cover: newPath,
    });
    res.json(postDoc);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Error creating post" });
  }
});

// ... Rest of the routes and server setup



app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
