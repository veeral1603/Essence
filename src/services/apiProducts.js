const BASE_URL = `https://dummyjson.com/products`;

export async function getAllProducts() {
  try {
    const response = await fetch(BASE_URL + `?limit=0`);
    if (!response.ok) {
      throw new Error("Network response was not OK.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Products Fetching Error: ", error.message);
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(BASE_URL + `/${id}`);

    if (!response.ok) {
      throw new Error("Netork response was not OK.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetching product details: ", error.message);
  }
}
