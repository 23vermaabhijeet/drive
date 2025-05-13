import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mensa'
});

db.connect((err) => {
    if (err) {
        console.log("Error connecting to the database");
        return;
    }
    console.log("Connected to the database");
});

const server = http.createServer((req, res) => {
    // Abilita CORS manualmente
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url === '/api/prenotazioni' && req.method === 'GET') {
        db.query('SELECT * FROM prenotazione', (err, results) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Errore nel recupero dati' }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(results));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Endpoint non trovato' }));
    }
});

server.listen(5173, () => {
    console.log('Server in ascolto su http://localhost:5173');
});
