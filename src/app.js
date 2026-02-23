const BASE_URL = "http://localhost:4040"


export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/product`)
  return res.json()
}

export async function createProduct(data) {
  const res = await fetch(`${BASE_URL}/product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}