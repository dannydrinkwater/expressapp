const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('The most basic Express app you can build')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})