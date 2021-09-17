const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;

const pool = new Pool({
    database: 'weekend-react-gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 3000
});

pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;