const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    res.render('index', {});
  } catch (error) {
    console.error('Error rendering template:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});