const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Percorso del file database
const dbPath = path.resolve(__dirname, 'store.db');

// Connessione al database SQLite
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Errore nella connessione al database:', err.message);
  } else {
    console.log('Connessione al database SQLite riuscita.');
  }
});

module.exports = db;