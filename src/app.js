// src/app.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

console.log('DEBUG raw SPRING_API_BASE_URL:', process.env.SPRING_API_BASE_URL);

const express = require('express');
const cors = require('cors');
const { SPRING_API_BASE_URL } = require('./config');

if (!SPRING_API_BASE_URL) {
    console.error('ERROR: SPRING_API_BASE_URL no definida. Aborting startup.');
    process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

const routes = require('./routes');
app.use('/api', routes);

app.get('/', (req, res) => res.redirect('/api/health'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API escuchando en puerto ${PORT}`);
    console.log(`Usando SPRING_API_BASE_URL = ${SPRING_API_BASE_URL}`);
});

module.exports = app;
