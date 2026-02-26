import { useState, useEffect } from "react";
import { createProduct, updateProduct } from "../app";

export default function ProductForm({ selectedProduct, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image_url: ""
  });

  const isEditing = selectedProduct !== null;

  useEffect(() => {
    if (selectedProduct) {
      setForm(selectedProduct);
    } else {
      setForm({
      name: "",
      description: "",
      price: "",
      category: "",
      image_url: ""
    });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      await updateProduct(selectedProduct.id, form);
    } else {
      await createProduct(form);
    }

    onSuccess();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{isEditing ? "Update Product" : "Add Product"}</h2>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
      <input name="image_url" value={form.image_url} onChange={handleChange} placeholder="Image URL" />

      <button type="submit">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
}