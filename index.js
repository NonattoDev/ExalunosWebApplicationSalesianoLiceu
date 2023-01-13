const express = require("express");
const app = express();
const port = 3000;

//
const session = require("express-session");

//__________________________
const expressLayouts = require("express-ejs-layouts");

// Database
const connectionDb = require("./database/server");

// Models
const Address = require("./models/Address");
const ExAlunos = require("./models/ExAlunos");
const Guests = require("./models/Guests");

// Utilitários
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Sessions
app.use(
  session({
    secret: "mySecret__",
    cookie: {
      secure: false,
      maxAge: 300000,
    },
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
