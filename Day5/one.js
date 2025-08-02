const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('Okay')
})

app.post('/insert/:no', (req, res) => {
  res.send('POST request to the homepage'+$no)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
