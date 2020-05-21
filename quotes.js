const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quotesSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: String,
  quote: String,
});

module.exports = mongoose.model("quotes", quotesSchema);
