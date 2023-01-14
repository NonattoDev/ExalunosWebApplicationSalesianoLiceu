const express = require("express");
const router = express.Router();
const isLoggedIn = require("../helpers/isLoggedIn");

const AdminController = require("../controllers/AdminController");

router.get("/dashboard", isLoggedIn, AdminController.adminDashBoardGET);
router.post("/logout", AdminController.adminLogoutPOST);
router.get("/login", AdminController.adminLoginGET);
router.post("/login", AdminController.adminLoginPost);

module.exports = router;
