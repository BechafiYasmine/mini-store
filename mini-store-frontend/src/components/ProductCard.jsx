import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="product-card">
      {product.image_url && (
        <img src={product.image_url} alt={product.name} />
      )}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><b>${product.price}</b></p>
      <div className="actions">
        <Link to={`/edit/${product.id}`} className="btn edit">✏️</Link>
        <button onClick={() => onDelete(product.id)} className="btn delete">🗑️</button>
      </div>
    </div>
  );
}
