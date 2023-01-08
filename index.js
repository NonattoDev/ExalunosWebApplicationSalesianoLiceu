const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

//
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("express-flash");

// Database
const connectionDb = require("./database/server");

// Models
const Address = require("./models/Address");
const ExAlunos = require("./models/ExAlunos");
const Guests = require("./models/Guests");

// Utilitários
app.use(flash());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "handlebars");
app.engine("handlebars", engine());

// Set Cookie Parser, Sessions and Flash
app.use(cookieParser("NotSoSecret"));
app.use(
  session({
    secret: "Something",
    cookie: {
      maxAge: 60000,
    },
    resave: true,
    saveUninitialized: true,
  })
);

//Import Routes
const exalunoRouter = require("./routes/exAlunoRouter");
const adminRouter = require("./routes/adminRouter");

// Routes
app.use("/", exalunoRouter);
app.use("/exalunos", exalunoRouter);
app.use("/admin", adminRouter);

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
