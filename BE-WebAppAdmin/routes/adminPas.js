const express = require("express");
const router = express.Router();
const adminPas = require("../controllers/adminPas");

router.get("/login", adminPas.login);

module.exports = router;