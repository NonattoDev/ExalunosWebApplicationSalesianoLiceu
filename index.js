const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

//
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

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
let options = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  createDatabase: true,
  schema: {
    tableName: "sessions",
    columnNames: {
      session_id: "sessionID",
      expires: "expires",
      data: "data",
    },
  },
};
const sessionStore = new MySQLStore(options);
app.use(
  session({
    secret: "mySecret__",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
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
app.get("*", (req, res) => {
  res.status(404).render("404", { layout: "layouts/login.ejs" });
});

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
