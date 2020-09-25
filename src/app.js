
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send([{ id: 1, name: "Gary", active: true }])
})
const server = app.listen(port);

module.exports = { app, server };
