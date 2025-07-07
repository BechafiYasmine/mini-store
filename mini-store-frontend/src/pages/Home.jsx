import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:3000/api/products');
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3000/api/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} onDelete={deleteProduct} />
        ))}
      </div>
    </div>
  );
}
