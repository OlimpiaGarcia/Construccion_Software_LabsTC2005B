const express = require('express');
const path = require("path");
const router = express.Router();

const userscontroller = require("../controller/users.controller");

router.get("/logout", userscontroller.logout)

module.exports = router; //exportar la ruta