const express = require("express");
const app = express();

app.use(express.static('dist'))

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + `/index.html`);
})

app.listen(3000, () => {console.log(`server on`)})