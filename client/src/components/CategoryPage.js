import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function CategoryPage({ setCartItems }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('magliette');

  useEffect(() => {
    fetch(`http://localhost:3001/api/products/${category}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [category]);

  return (
    <div className="category-page">
      <div className="category-buttons">
        <button onClick={() => setCategory('magliette')}>MAGLIETTE</button>
        <button onClick={() => setCategory('scarpe')}>SCARPE</button>
        <button onClick={() => setCategory('pantaloni')}>PANTALONI</button>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;