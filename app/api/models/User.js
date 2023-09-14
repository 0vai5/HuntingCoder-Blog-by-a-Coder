const mongoose = require("mongoose");
const { Schema, model } = mongoose; // Import Schema and model correctly

const UserSchema = new Schema({
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
});

const UserModel = model("User", UserSchema); // The first argument is the model name

module.exports = UserModel;
