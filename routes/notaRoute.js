const express = require('express')

const notaController = require('../controllers/notaController')

const router = express.Router() 


router.get('/:id', notaController.getNotaById)


module.exports = router