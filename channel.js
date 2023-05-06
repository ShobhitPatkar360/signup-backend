// make schema and model in Channelmodel file---------------------------
const mongoose = require("mongoose");

// creating schema
const channelSchema = new mongoose.Schema({
  name: String,
  phone: Number,
});

// creating model
const ChannelModel = mongoose.model("forms", channelSchema);

// exporting the model
module.exports = ChannelModel;
