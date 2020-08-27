import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email: String,
    //password: String,
    hash: String,
    firstname: String,
    lastname: String,
    rooms: Array,
});

module.exports = mongoose.model("User", schema);
