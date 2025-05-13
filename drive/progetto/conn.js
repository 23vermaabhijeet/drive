import mysql from 'mysql';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mensa',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Errore di connessione al database:', err);
        return;
    }
    console.log('Connesso al database MySQL');
});

app.get('/api/dati', (req, res) => {
    const query = 'SELECT * FROM prenotazioni';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).send('Errore nel server');
            return;
        }
        res.json(results);
    });
});

app.listen(3001, () => {
    console.log('Server in ascolto sulla porta 3001');
});