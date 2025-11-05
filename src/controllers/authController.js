const spring = require('../services/springService');

const login = async (req, res) => {
    try {
        const resp = await spring.login(req.body);
        res.status(resp.status).json(resp.data);
    } catch (err) {
        res
            .status(err.response?.status || 500)
            .json({ error: err.message, details: err.response?.data });
    }
};

const register = async (req, res) => {
    try {
        const resp = await spring.registerArbitro(req.body);
        res.status(resp.status).json(resp.data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.message });
    }
};

module.exports = { login, register };
