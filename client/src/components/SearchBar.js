import React, { useState, useEffect } from 'react';
import '../styles/components.css';

function SearchBar({ setSelectedProduct, setPage }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 1) {
      fetch('http://localhost:3001/api/products')
        .then(res => res.json())
        .then(data => {
          const filtered = data.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filtered);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = product => {
    setSelectedProduct(product);
    setPage('detail');
    setQuery('');
    setResults([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cerca un capo..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <div className="search-results">
          {results.map(product => (
            <div key={product.id} onClick={() => handleSelect(product)}>
              {product.name} – {product.price.toFixed(2)} €
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
console.log('✅ SearchBar rendered');
