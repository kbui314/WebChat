import mongoose, { Schema } from "mongoose";
// let Room = require("../models/Room");

const userSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    rooms: Array,
});
module.exports = mongoose.model("User", userSchema);
