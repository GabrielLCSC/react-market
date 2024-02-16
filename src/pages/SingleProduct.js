// SingleProduct.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api";

const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await fetchProductById(productId);
      setProduct(productData);
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      <h2>Single Product Page</h2>
      {product ? (
        <div>
          <div className="single-product__image">
            <img src={product.image} alt={product.title} />
          </div>
          <h3>{product.title}</h3>
          <p>Price: {product.price}€</p>
          <p>Quantity: {product.quantity} available</p>
          {/* Add more details about the product */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
