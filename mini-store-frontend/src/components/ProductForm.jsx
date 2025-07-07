import './ProductForm.css';

export default function ProductForm({ form, onChange, onSubmit, isEdit }) {
  return (
    <form className="product-form" onSubmit={onSubmit}>
      <input name="name" value={form.name} onChange={onChange} placeholder="Name" required />
      <input name="description" value={form.description} onChange={onChange} placeholder="Description" />
      <input name="price" type="number" step="0.01" value={form.price} onChange={onChange} placeholder="Price" required />
      <input name="image_url" value={form.image_url} onChange={onChange} placeholder="Image URL" />
      <button type="submit">{isEdit ? 'Update' : 'Add'} Product</button>
    </form>
  );
}
