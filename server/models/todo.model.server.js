const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: " " },
    dateAdded: { type: Date, required: true }
});
module.exports = mongoose.model('Todo', todoSchema);
