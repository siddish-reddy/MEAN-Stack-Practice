const express = require('express');
const routes = express.Router();
const Todo = require('../models/todo.model.server');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var url = bodyParser.urlencoded();
todos = [
  {
    name: "Sample",
    desc: "lorem ipsum"
  }
];
routes.get('/', (req, res) => {
  console.log("/");
  res.status(200).json(todos);
});

routes.post('/', jsonParser, (req, res) => {
  todos.push({ name: req.body.name, desc: req.body.desc });
  res.status(200).json({ name: req.body.name, desc: req.body.desc });
})

routes.get('/api', (req, res) => {
  console.log("/api");
  res.status(200).send('API');
});
module.exports = routes;
