// api.js

export const fetchProducts = async () => {
  try {
    const response = await fetch("https://iim.etherial.fr/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.map((product) => ({
      id: product.id,
      title: product.title,
      price: parseFloat(product.price),
      quantity: parseInt(product.quantity),
      image: product.image,
      unit_of_measurement: product.unit_of_measurement,
      measure: parseFloat(product.measure),
      price_per_measure: parseFloat(product.price_per_measure),
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductById = async (productId) => {
  try {
    const products = await fetchProducts();
    const product = products.find((product) => product.id === productId);
    return product || null;
  } catch (error) {
    console.error("Error fetching product by id:", error);
    return null;
  }
};
