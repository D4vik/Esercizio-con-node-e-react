const API_BASE = 'http://localhost:3001/api';

export async function fetchAllProducts() {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) throw new Error('Errore nel recupero prodotti');
  return res.json();
}

export async function fetchProductsByCategory(category) {
  const res = await fetch(`${API_BASE}/products/${category}`);
  if (!res.ok) throw new Error('Errore nel recupero categoria');
  return res.json();
}