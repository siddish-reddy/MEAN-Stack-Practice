const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, default: " " }
});
module.exports = mongoose.model('Todo', todoSchema);
