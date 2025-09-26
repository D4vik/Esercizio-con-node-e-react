const db = require('../db');

// Crea la tabella prodotti se non esiste
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('Errore nella creazione della tabella products:', err.message);
    } else {
      console.log('Tabella products pronta.');
    }
  });
});

module.exports = db;