const express = require('express');

const app = express();

const middleware1 = (req, res, next) => {
  console.log("Doing stuff in middelware 1");
}

app.use(middleware1);

app.get('/myroute', (req, res) => {
  console.log('handling /myroute');
  res.send('content for /myroute');
});

app.listen(5000, () => console.log('server listening on port 5000'));
