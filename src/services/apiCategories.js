const BASE_URL = "https://dummyjson.com/products/category";

export async function getProductsByCategory(category) {
  try {
    const response = await fetch(`${BASE_URL}/${category}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
