const BASE_URL = "http://localhost:4040";

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/product`);
  return res.json();
}

export async function createProduct(data) {
  const res = await fetch(`${BASE_URL}/product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function searchProducts(search, category) {
  let query = `${BASE_URL}/product?`;

  if (search) query += `search=${encodeURIComponent(search)}&`;
  if (category) query += `category=${encodeURIComponent(category)}`;

  const res = await fetch(query);
  return res.json();
}


export async function searchProducts(search, category) {
  let query = `${BASE_URL}/product?`;

  if (search) query += `search=${encodeURIComponent(search)}&`;
  if (category) query += `category=${encodeURIComponent(category)}`;

  const res = await fetch(query);
  return res.json();
}