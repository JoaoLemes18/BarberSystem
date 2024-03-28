const express = require("express")
const conn = require("./db/conn")
const app = express()
const cors = require('cors')

const userRouter = require("./routes/userRouter")
const appointmentRouter = require("./routes/appointmentRouter")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(userRouter)
app.use(appointmentRouter)

conn
  .sync()
  .then(() => {
    app.listen(3000, console.log("Server Running"));
  })
  .catch((err) => console.log("Erro na conexao db", err));
