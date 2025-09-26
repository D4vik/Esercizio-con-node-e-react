const express = require('express');
const router = express.Router();

// Simulazione salvataggio carrello (non persistente)
let cart = [];

// Aggiungi un prodotto al carrello
router.post('/add', (req, res) => {
  const { name, price, size } = req.body;
  if (!name || !price || !size) {
    return res.status(400).json({ error: 'Dati mancanti' });
  }

  cart.push({ name, price, size });
  res.json({ message: 'Prodotto aggiunto al carrello', cart });
});

// Ottieni il carrello attuale
router.get('/', (req, res) => {
  res.json(cart);
});

// Simula acquisto
router.post('/checkout', (req, res) => {
  cart = []; // svuota il carrello
  res.json({ message: 'Acquisto effettuato con successo!' });
});

module.exports = router;