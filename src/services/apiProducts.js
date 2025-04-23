const BASE_URL = `https://dummyjson.com/products?limit=0`;

export default async function getAllProducts() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Network respons was not OK.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Products Fetching Error:", error);
  }
}
