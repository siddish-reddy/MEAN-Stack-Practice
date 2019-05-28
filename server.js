const express = require('express');
const config = require('./server/config');
const mongoose = require('mongoose');
const routes = require('./server/routes');

/*mongoose.connect(config.MONGO_CONNECTION_URI, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongo db"))
  .catch(err => console.error(err));
*/
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
})
app.use('/', routes);
app.listen(8000, () => console.log("server started in 8000"));
