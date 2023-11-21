import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3000

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
