const express = require('express');

const app = express();

const extractUserName = (req, res, next) => {
  req.userName = req.query.name;
  next(); 
}

app.get('/myroute', (req, res) => {
  console.log('handling /myroute');
  res.send('content for /myroute');
});

app.get('/hello', extractUserName, (req, res) => {
  console.log('handling /hello');
  res.send(`Hello ${req.userName}`);
});

app.listen(5000, () => console.log('server listening on port 5000'));
