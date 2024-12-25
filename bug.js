const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This will cause a stack overflow if not handled properly
  res.render('index', {  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});