const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/AdminController");

router.get("/login", AdminController.adminLoginGET);

module.exports = router;
