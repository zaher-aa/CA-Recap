const express = require('express');

const app = express();

app.use([
  express.json(),
  express.urlencoded({ extended: true }),
]);

app.listen(3000, () => console.log('Running on http://localhost:3000'));

module.exports = app;
