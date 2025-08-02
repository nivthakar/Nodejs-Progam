const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/:name/:age', (req, res) => {
  const name = req.body.name  // Get name from request body
  const age = req.body.age
  res.send(`Hello ${name}! Your age is ${age}!`)  // Respond with personalized greeting
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})