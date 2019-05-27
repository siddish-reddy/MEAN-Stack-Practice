const express = require('express');
const config = require('./server/config');
const mongoose = require('mongoose');
const routes = require('./server/routes');
mongoose.connect(config.MONGO_CONNECTION_URI,  { useNewUrlParser: true })
  .then(()=>console.log("Connected to mongo db"))
  .catch(err=>console.error(err));

const app = express();
app.use('/', routes);
app.route('/').get();
app.listen(8000, ()=>console.log("server started in 8000"));
