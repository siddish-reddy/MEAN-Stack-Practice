const express = require('express');
const config = require('./server/config');
const mongoose = require('mongoose');

mongoose.connect(config.MONGO_CONNECTION_URI)
  .then(()=>console.log("Connected to mongo db"))
  .catch(err=>console.error(err));

const app = express();
app.listen(8080, ()=>console.log("server started in 8080"));
