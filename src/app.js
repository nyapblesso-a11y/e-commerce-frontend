const BASE_URL = "http://localhost:4040"


export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/product`)
  return res.json()
}


