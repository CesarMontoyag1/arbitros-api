// src/services/springService.js
const axios = require('axios');
const { SPRING_API_BASE_URL } = require('../config');

if (!SPRING_API_BASE_URL) {
    throw new Error(
        'SPRING_API_BASE_URL no está definida. Debes establecerla en el entorno (archivo .env, Docker, AWS, etc.).'
    );
}

// Normalizar: quitar slashes finales
const base = SPRING_API_BASE_URL.replace(/\/+$/, '');

const client = axios.create({
    baseURL: base,
    timeout: 8000
});

const authHeader = (token) =>
    token
        ? {
            headers: { Authorization: token }
        }
        : {};

module.exports = {
    login: (payload) => client.post('/auth/login', payload),
    registerArbitro: (payload) => client.post('/arbitros', payload),
    getArbitroById: (id, token) => client.get(`/arbitros/${id}`, authHeader(token)),
    getPartidosForArbitro: (id, token) => client.get(`/arbitros/${id}/partidos`, authHeader(token)),
    getPagosForArbitro: (id, token) => client.get(`/arbitros/${id}/pagos`, authHeader(token))
};
