import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import '../App.css';

export default function AddProduct() {
  const [form, setForm] = useState({ name: '', description: '', price: '', image_url: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`http://localhost:3000/api/products/${id}`, form);
    } else {
      await axios.post('http://localhost:3000/api/products', form);
    }
    navigate('/');
  };

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/api/products`)
        .then(res => {
          const product = res.data.find(p => p.id == id);
          setForm(product);
        });
    }
  }, [id]);

  return (
    <div>
      <h2>{id ? 'Edit' : 'Add'} Product</h2>
      <ProductForm form={form} onChange={handleChange} onSubmit={handleSubmit} isEdit={!!id} />
    </div>
  );
}
