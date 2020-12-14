const express = require('express');

const app = express();

const extractUserName = (req, res, next) => {
  if (req.query.extractUserName) {
    req.userName = req.query.name;
    next();
  } else {
    res
      .status(400)
      .send('You have to specify a "name" query parameter to call this route');
  }
}

const handleError = (err, req, res, next) => {
  console.error(err)
};

app.use(handleError);
app.get('/syncError', (req, res) => {
  throw new Error('BOOM');
});

app.get('/asyncError', (req, res) => {
  setTimeout(() => {
   throw new Error('BOOM');
  }, 1000);
 });
 

app.get('/myroute', (req, res) => {
  console.log('handling /myroute');
  res.send('content for /myroute');
});

app.get('/hello', extractUserName, (req, res) => {
  console.log('handling /hello');
  res.send(`Hello ${req.userName}`);
});

app.listen(5000, () => console.log('server listening on port 5000'));
