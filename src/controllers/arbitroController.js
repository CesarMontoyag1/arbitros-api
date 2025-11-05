const spring = require('../services/springService');

const getById = async (req, res) => {
    const token = req.headers.authorization;
    try {
        const resp = await spring.getArbitroById(req.params.id, token);
        res.json(resp.data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.message });
    }
};

const getPartidos = async (req, res) => {
    const token = req.headers.authorization;
    try {
        const resp = await spring.getPartidosForArbitro(req.params.id, token);
        res.json(resp.data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.message });
    }
};

const getPagos = async (req, res) => {
    const token = req.headers.authorization;
    try {
        const resp = await spring.getPagosForArbitro(req.params.id, token);
        res.json(resp.data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.message });
    }
};

module.exports = { getById, getPartidos, getPagos };
