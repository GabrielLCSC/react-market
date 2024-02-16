import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api";
import "../styles/index.css";

const Home = ({ cartItems, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      console.log("Données récupérées :", data);
      setProducts(data);
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    console.log("Produit ajouté au panier :", product);
    addToCart(product);
  };

  return (
    <div className="homepage">
      <h2>Home Page</h2>
      <h3>Product List</h3>
      <ul className="homepage__ul">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="homepage__image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="homepage__ul__info">
                <h3>{product.title}</h3>
                <p>{product.price}€</p>
              </div>
              <p className="homepage__ul__stock"></p>
            </Link>
            <div className="homepage__ul__button">
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
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

export default connect(mapStateToProps, { addToCart })(Home);
