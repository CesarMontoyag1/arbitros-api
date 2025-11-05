const axios = require('axios');
const SPRING_BASE = process.env.SPRING_API_BASE_URL || 'http://54.92.210.23:8080/api';

const client = axios.create({ baseURL: SPRING_BASE, timeout: 8000 });

module.exports = {
    login: (payload) => client.post('/auth/login', payload),
    registerArbitro: (payload) => client.post('/arbitros', payload),
    getArbitroById: (id, token) => client.get(`/arbitros/${id}`, { headers: token ? { Authorization: token } : {} }),
    getPartidosForArbitro: (id, token) => client.get(`/arbitros/${id}/partidos`, { headers: token ? { Authorization: token } : {} }),
    getPagosForArbitro: (id, token) => client.get(`/arbitros/${id}/pagos`, { headers: token ? { Authorization: token } : {} })
};
