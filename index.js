const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
const { dbConnection } = require("./config/db")

app.use(cors())

app.use(express.json())

app.use("/nota", require("./routes/notaRoute"))

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
