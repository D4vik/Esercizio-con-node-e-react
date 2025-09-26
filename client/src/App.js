import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CategoryPage from './components/CategoryPage';
import Cart from './components/Cart';
import './styles/components.css';

function App() {
  const [page, setPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app-container">
      {/* ✅ Pulsante carrello fisso */}
      <button className="cart-button" onClick={() => setPage('cart')}>
        🛒 Carrello
      </button>

      {/* ✅ Barra di ricerca */}
      <SearchBar setPage={setPage} />

      {page === 'home' && (
        <CategoryPage
          setCartItems={setCartItems}
        />
      )}

      {page === 'cart' && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default App;