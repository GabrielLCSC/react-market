// Action pour ajouter un produit au panier
export const addToCart = (productId) => {
  return {
    type: "ADD_TO_CART",
    payload: productId,
  };
};

// Action pour supprimer un produit du panier
export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};
