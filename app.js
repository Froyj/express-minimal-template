const express = require('express');

const app = express();

const middleware1 = (req, res, next) => {
  console.log("Doing stuff in middelware 1");
  next();
}

const middleware2 = (req, res, next) => {
  console.log("Doing stuff in middleware 2");
  next();
}

app.get('/myroute', middleware1, middleware2, (req, res) => {
  console.log('handling /myroute');
  res.send('content for /myroute');
});

app.get('/hello', middleware2, (req, res) => {
  console.log('handling /hello');
  res.send(`Hello ${req.query.name}`);
});

app.listen(5000, () => console.log('server listening on port 5000'));
