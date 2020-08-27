import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	title: String,
	users: Array,
	messages: Array
})

module.exports = mongoose.model("Room", schema);
