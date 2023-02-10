const express = require("express");
const app = express();

app.get('/api', (req, res) => {
  const apiKey = req.query.key;
  console.log(apiKey)
  if (apiKey !== "somekeylol") return res.send("I wonder whats the key")

  res.contentType('application/json')
  res.send({
    key: apiKey,
    numbers: [0,1,2,3,4,5]
  })
})

app.listen(3000, () => console.log("Alive on https://localhost:3000"))