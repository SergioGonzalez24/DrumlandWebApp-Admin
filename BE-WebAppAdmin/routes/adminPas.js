const express = require("express");
const router = express.Router();
const adminPasController = require("../controllers/adminPas");

router.get("/login",dminPasController.getLogin);

module.exports = router;