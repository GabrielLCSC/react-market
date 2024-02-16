// rootReducer.js

import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer, // Ajoutez le reducer des produits ici
});

export default rootReducer;
