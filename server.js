const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();
const port = 8000;


app.use(express.static('static'))

/*
app.get('/', (req, res) => {
  res.send('Hello World!');
})
*/

app.listen(port, () => {
  console.log(`App started: listening on port ${port}`);
})
