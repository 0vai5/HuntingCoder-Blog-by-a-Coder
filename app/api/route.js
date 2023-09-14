const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./models/User");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const saltRounds = 10;

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://rovais53:mba21345@cluster0.kshqwu8.mongodb.net/your-database-name", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.post("/Register", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(Password, saltRounds);
    const userDoc = await User.create({
      Email,
      Password: hashedPassword,
    });
    res.json(userDoc);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/Login", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    // Find the user by their email
    const user = await User.findOne({ Email });

    // Check if the user exists
    if (!user) {
      res.status(401).json({ error: "User not found" });
      return;
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(Password, user.Password);

    if (passwordMatch) {
      // Passwords match, user is authenticated
      res.json({ message: "Login successful" });
    } else {
      // Passwords do not match
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
