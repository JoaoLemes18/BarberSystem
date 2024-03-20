const express = require("express");
const conn = require("./db/conn");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

conn
  .sync()
  .then(() => {
    app.listen(3000, console.log("Server Running"));
  })
  .catch((err) => console.log("Erro na conexao db", err));
