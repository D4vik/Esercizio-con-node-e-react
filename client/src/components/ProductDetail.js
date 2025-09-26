import React, { useState } from 'react';
import '../styles/components.css';

function ProductDetail({ selectedProduct, setCartItems, setPage }) {
  const [showNotification, setShowNotification] = useState(false);

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    setCartItems(prev => [...prev, selectedProduct]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="product-detail">
      <h2>{selectedProduct.name}</h2>
      <p>Prezzo: {selectedProduct.price.toFixed(2)} €</p>
      <p>Taglia selezionata: <strong>{selectedProduct.size}</strong></p>

      <button onClick={handleAddToCart}>🛒 Aggiungi al carrello</button>

      {showNotification && (
        <div className="notification success">
          ✅ Prodotto aggiunto al carrello!
        </div>
      )}
    </div>
  );
}

export default ProductDetail;