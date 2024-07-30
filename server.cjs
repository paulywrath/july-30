const express = require("express");
const app = express();

const davesIKnow = [`David Hoffner`, `Dave Gord`, `David`, `Dave Jadisky`, `Dave Capisano`]

app.use(express.static('dist'))

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + `/index.html`);
})

app.get('/api/v1/daves', (req, res, next) => {
  res.send(davesIKnow);
})

const port = process.env.PORT || 3000

app.listen(port, () => {console.log(`server on`)})