const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rotte API
const productRoutes = require('./api/productRoutes');
const cartRoutes = require('./api/cartRoutes');

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Avvio server
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});