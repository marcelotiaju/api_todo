const express = require("express");
const cors = require("cors");
const routes = require('./src/routes/todo');

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.json({ message: "Bemvindo a Api Todo" });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});