import express from "express"
import { theoremsRouter } from "./routes/theorems.js"

const app = express()
const PORT = process.env.PORT ?? 3100
app.disable('x-powered-by')
app.use('/theorems', theoremsRouter)

app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})  