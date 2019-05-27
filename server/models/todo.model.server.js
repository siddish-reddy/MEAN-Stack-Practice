const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: " " }
});
module.exports = mongoose.model('Todo', todoSchema);
