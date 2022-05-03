const express = require("express");
const router = express.Router();
const adminPas = require("../controllers/adminPas");

router.get("/buscarUsuario", adminPas.getUsers);

module.exports = router;