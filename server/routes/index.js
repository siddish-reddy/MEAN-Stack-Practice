const express = require('express');
const routes = express.Router();
const Todo = require('../models/todo.model.server');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const mongoose = require('mongoose');

todos = [
];

routes.get('/', (req, res) => {
  console.log("/");
  var _;
  Todo.find({}, { name: 1, _id: 0, desc: 1 }, (err, todos) => {
    res.status(200).send(todos);
  });
});

routes.post('/', jsonParser, (req, res) => {
  let { name, desc } = req.body;
  let todo = new Todo({ name, desc });
  todo.save((err, todo) => {
    if (err) { console.log(err); return; }
    console.log("Saved:"); console.log(todo);
  })
  todos.push({ name: req.body.name, desc: req.body.desc });
  res.status(200).json({ name: req.body.name, desc: req.body.desc });
})

routes.get('/api', (req, res) => {
  console.log("/api");
  res.status(200).send('API');
});
module.exports = routes;
