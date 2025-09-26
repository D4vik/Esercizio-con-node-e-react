import React, { useState } from 'react';
import '../styles/components.css';

function ProductCard({ product, setCartItems }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    const item = { ...product, size: selectedSize };
    setCartItems(prev => [...prev, item]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price.toFixed(2)} €</p>

      <div className="size-selector">
        {['S', 'M', 'L', 'XL'].map(size => (
          <button
            key={size}
            className={selectedSize === size ? 'selected' : ''}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>

      <button className="add-to-cart" onClick={handleAddToCart}>
        🛒 Aggiungi al carrello
      </button>

      {showNotification && (
        <div className="notification success">
          ✅ Prodotto aggiunto al carrello!
        </div>
      )}
    </div>
  );
}

export default ProductCard;