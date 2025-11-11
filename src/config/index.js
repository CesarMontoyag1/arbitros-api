const NODE_ENV = process.env.NODE_ENV || 'development';
const SPRING_API_BASE_URL = process.env.SPRING_API_BASE_URL; // Debe existir SIEMPRE

module.exports = {
    NODE_ENV,
    SPRING_API_BASE_URL
};
