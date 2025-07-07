import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../App.css'; // Assuming you have some styles for the product grid

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
    <div className="product-grid">
  {products.map(p => (
    <ProductCard key={p.id} product={p} onDelete={deleteProduct} />
  ))}
</div>


    
  );
}
