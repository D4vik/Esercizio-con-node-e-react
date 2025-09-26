import React, { useState } from 'react';
import '../styles/components.css';

function Cart({ cartItems, setCartItems, setPage }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePurchase = () => {
    setCartItems([]);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  return (
    <div className="cart-container">
      <button className="back-home" onClick={() => setPage('home')}>
        ⬅ Torna alla Home
      </button>

      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name} ({item.size})</span>
          <span>{item.price.toFixed(2)} €</span>
        </div>
      ))}

      <div className="cart-summary">
        <p>Totale: {cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)} €</p>
        <button onClick={handlePurchase}>✅ Acquista</button>
      </div>

      {showConfirmation && (
        <div className="notification success">
          🎉 Acquisto effettuato con successo!
        </div>
      )}
    </div>
  );
}

export default Cart;