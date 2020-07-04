import express from 'express'
import path from 'path'
const app= express()
const PORT=process.env.PORT || 3000

app.set('port', PORT)
app.set("views", path.join(__dirname, '/views'))
app.set("view engine", "ejs")

app.use(require("./routes/index.routes"))
app.use(express.static(path.join(__dirname, "/public")))

export default app