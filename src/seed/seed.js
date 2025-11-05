const spring = require('../services/springService');

const arbitros = [
    { nombre: 'Arbitro1', email: 'arb1@example.com', foto: 'https://bucket.s3.amazonaws.com/arb1.jpg', password: 'pass1' },
    // ... crear hasta 7-10
];

async function seed() {
    for (const a of arbitros) {
        try {
            const r = await spring.registerArbitro(a);
            console.log('created', r.data);
        } catch (e) {
            console.error('err', e.response?.data || e.message);
        }
    }
    process.exit(0);
}

seed();
