// Cart.js

import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart Page</h2>
      <h3>Items in Cart</h3>
      <ul className="cart__ul">
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="cart__image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.price}€</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);
