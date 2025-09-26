const express = require('express');
const router = express.Router();
const db = require('../db');

// Ottieni tutti i prodotti
router.get('/', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      console.error('Errore nel recupero prodotti:', err.message);
      return res.status(500).json({ error: 'Errore nel server' });
    }
    res.json(rows);
  });
});

// Ottieni prodotti per categoria
router.get('/:category', (req, res) => {
  const { category } = req.params;
  db.all('SELECT * FROM products WHERE category = ?', [category], (err, rows) => {
    if (err) {
      console.error('Errore nel recupero categoria:', err.message);
      return res.status(500).json({ error: 'Errore nel server' });
    }
    res.json(rows);
  });
});

module.exports = router;