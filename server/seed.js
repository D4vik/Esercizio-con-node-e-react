const db = require('./db');

const products = [
  // Magliette
  { name: 'Maglietta Bianca', category: 'magliette', price: 19.99 },
  { name: 'Maglietta Nera', category: 'magliette', price: 21.99 },
  { name: 'Maglietta Rossa', category: 'magliette', price: 18.99 },
  { name: 'Maglietta Verde', category: 'magliette', price: 20.99 },
  { name: 'Maglietta Blu', category: 'magliette', price: 22.99 },
  { name: 'Maglietta Gialla', category: 'magliette', price: 17.99 },
  { name: 'Maglietta Grigia', category: 'magliette', price: 19.49 },
  { name: 'Maglietta Rosa', category: 'magliette', price: 20.49 },
  { name: 'Maglietta Arancione', category: 'magliette', price: 21.49 },

  // Scarpe
  { name: 'Scarpe Sportive', category: 'scarpe', price: 59.99 },
  { name: 'Scarpe Eleganti', category: 'scarpe', price: 89.99 },
  { name: 'Scarpe da Trekking', category: 'scarpe', price: 74.99 },
  { name: 'Scarpe Running', category: 'scarpe', price: 64.99 },
  { name: 'Scarpe Casual', category: 'scarpe', price: 49.99 },
  { name: 'Scarpe Invernali', category: 'scarpe', price: 79.99 },
  { name: 'Scarpe Estive', category: 'scarpe', price: 54.99 },
  { name: 'Scarpe da Ginnastica', category: 'scarpe', price: 69.99 },
  { name: 'Scarpe Classiche', category: 'scarpe', price: 84.99 },

  // Pantaloni
  { name: 'Pantaloni Jeans', category: 'pantaloni', price: 39.99 },
  { name: 'Pantaloni Chino', category: 'pantaloni', price: 44.99 },
  { name: 'Pantaloni Cargo', category: 'pantaloni', price: 49.99 },
  { name: 'Pantaloni Eleganti', category: 'pantaloni', price: 59.99 },
  { name: 'Pantaloni Sportivi', category: 'pantaloni', price: 34.99 },
  { name: 'Pantaloni Larghi', category: 'pantaloni', price: 42.99 },
  { name: 'Pantaloni Slim', category: 'pantaloni', price: 45.99 },
  { name: 'Pantaloni Invernali', category: 'pantaloni', price: 54.99 },
  { name: 'Pantaloni Estivi', category: 'pantaloni', price: 37.99 }
];

db.serialize(() => {
  db.run('DELETE FROM products');

  const stmt = db.prepare('INSERT INTO products (name, category, price) VALUES (?, ?, ?)');
  products.forEach(p => {
    stmt.run(p.name, p.category, p.price);
  });
  stmt.finalize();

  console.log('✅ Database popolato con 27 prodotti.');
});