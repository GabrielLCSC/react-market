// cartReducer.js

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload), // Filtrer pour ne conserver que les éléments dont l'ID ne correspond pas à celui de l'article à supprimer
      };
    default:
      return state;
  }
};

export default cartReducer;
