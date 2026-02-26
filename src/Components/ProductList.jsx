import { useEffect, useState } from "react";
import { fetchProducts, deleteProduct, searchProducts } from "../app.js";

export default function ProductList({ onEdit, refresh }) {
  // const [products, setProducts] = useState([]);
  // const [search, setSearch] = useState("");
  // const [category, setCategory] = useState("");

  // const loadProducts = async () => {
  //   const data = await fetchProducts();
  //   setProducts(data.data);
  // };

  // useEffect(() => {
  //   loadProducts();
  // }, [refresh]);

  // const handleSearch = async () => {
  //   const data = await searchProducts(search, category);
  //   setProducts(data.data);
  // };

  // const handleDelete = async (id) => {
  //   await deleteProduct(id);
  //   loadProducts();
  // };

  return (
    <div className="list">
      {/* <div className="search-bar">
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          placeholder="Category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={loadProducts}>Reset</button>
      </div>

      {products.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          <a className="image" href={product.image_url}>image</a>
          <div className="actions">
            <button onClick={() => {
              onEdit(product)}}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        </div>
      ))} */}
    </div>
  );
}