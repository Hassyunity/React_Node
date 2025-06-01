import React, { useState, useEffect } from 'react';
import '../assets/product.css';

const API_URL = import.meta.env.VITE_API_URL;

export default function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => {
        console.error('Erreur chargement produits:', err);
        setError("Serveur indisponible.");
      });
  }, []);

  const handleAddProduct = () => {
    if (!name || !price) {
      alert('Veuillez remplir le nom et le prix');
      return;
    }

    fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price: parseFloat(price) }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Erreur ajout produit');
        return res.json();
      })
      .then(newProduct => {
        setProducts(prev => [...prev, newProduct]);
        setName('');
        setPrice('');
      })
      .catch(err => alert(err.message));
  };

  const handleDeleteProduct = (id) => {
    fetch(`${API_URL}/products/${id}`, { method: 'DELETE' })
      .then(res => {
        if (res.status === 204) {
          setProducts(prev => prev.filter(p => p.id !== id));
        } else {
          alert('Erreur suppression produit');
        }
      })
      .catch(() => alert('Erreur suppression produit'));
  };

  return (
    <div className="product-admin">
      <h2>🛒 Gestion des Produits</h2>
      {error && <div className="error-message">{error}</div>}

      <div className="content-wrapper">
        <div className="product-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="4">Aucun produit</td>
                </tr>
              ) : (
                products.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price} Ar</td>
                    <td>
                      <button onClick={() => handleDeleteProduct(product.id)}>Supprimer</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="add-product-form">
          <input
            type="text"
            placeholder="Nom du produit"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Prix"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <button onClick={handleAddProduct}>Ajouter</button>
        </div>
      </div>
    </div>
  );
}
