const express = require("express");
const router = express.Router();
const adminController = require('../controllers/adminPas');

router.get('/',adminController.getUsuarios);


module.exports = router;