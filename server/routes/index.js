const express = require('express');
const routes = express.Router();
const Todo = require('../models/todo.model.server');

todos = [
  {
    name:"Sample",
    desc:"lorem ipsum",
    date:'1122002'
  }
];
routes.get('/', (req, res)=>{
  console.log("/");
  res.status(200).json(todos);
});

routes.get('/api', (req, res)=>{
  console.log("/api");
  res.status(200).send('API');
});
module.exports = routes;
