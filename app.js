
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = process.env.NODE_ENV === 'test' ? 3001 : 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send([{ name: "Gary", id: 1 }])
})
const server = app.listen(port);

module.exports = { app, server };
