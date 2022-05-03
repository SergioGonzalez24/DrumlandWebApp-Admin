const router = require('express').Router();
const adminPasController = require('../controllers/adminPas');


router.get=("/buscarUsuario",adminPasController.getUsuarios);