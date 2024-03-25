const express = require("express")
const conn = require("./db/conn")
const app = express()
const userRouter = require("./routes/userRouter")
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(userRouter)

conn
  .sync()
  .then(() => {
    app.listen(3000, console.log("Server Running"));
  })
  .catch((err) => console.log("Erro na conexao db", err));
