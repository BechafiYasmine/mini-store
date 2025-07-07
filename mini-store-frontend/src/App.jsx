import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<AddProduct />} />
      </Routes>
    </>
  );
}
