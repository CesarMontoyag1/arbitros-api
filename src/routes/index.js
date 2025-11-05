// src/routes/index.js
const { Router } = require('express');

const arbitrosRouter = require('./arbitros');
const authRouter = require('./auth');
const healthController = require('../controllers/healthController');

const router = Router();

// Healthcheck
router.get('/health', healthController.health);

// Montaje de subrutas
router.use('/arbitros', arbitrosRouter);
router.use('/auth', authRouter);

module.exports = router;
