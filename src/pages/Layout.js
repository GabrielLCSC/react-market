import React from "react";
import { Outlet, Link } from "react-router-dom";
import { connect } from "react-redux"; // Importez connect depuis react-redux
import "../styles/index.css";

const Layout = ({ cartItemCount }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart {cartItemCount > 0 && `(${cartItemCount})`}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="max-width">
        <Outlet />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItemCount: state.cart.cartItems.length, // Accédez à la longueur du tableau cartItems dans le state Redux
  };
};

export default connect(mapStateToProps)(Layout);
