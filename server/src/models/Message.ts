import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	content: String,
	timestamp: { type: Date, default: Date.now },
	user: Object
})

module.exports = mongoose.model("Message", schema);
