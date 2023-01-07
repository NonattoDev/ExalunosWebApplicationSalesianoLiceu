const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const connectionDb = require("./database/server");

// Models
const Address = require("./models/Address");
const ExAlunos = require("./models/ExAlunos");
const Guests = require("./models/Guests");

// Utilitários
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "handlebars");
app.engine("handlebars", engine());

//Import Routes
const exalunoRouter = require("./routes/exalunoRouter");

// Routes
app.use("/exalunos", exalunoRouter);

connectionDb
  .sync({ force: true })
  .then((result) => {
    console.log("Connection established");
    app.listen(port, () => {
      console.log("Aplication is running on http://localhost:" + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
