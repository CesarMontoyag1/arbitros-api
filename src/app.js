// src/app.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Monta el index de rutas
const routes = require('./routes');
app.use('/api', routes);

// Ruta base opcional
app.get('/', (req, res) => res.redirect('/api/health'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API escuchando en puerto ${PORT}`);
});

module.exports = app;
