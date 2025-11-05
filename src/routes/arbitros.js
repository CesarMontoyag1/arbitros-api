const express = require('express');
const router = express.Router();
const arbitroController = require('../controllers/arbitroController');

router.get('/:id', arbitroController.getById);
router.get('/:id/partidos', arbitroController.getPartidos);
router.get('/:id/pagos', arbitroController.getPagos);

module.exports = router;
