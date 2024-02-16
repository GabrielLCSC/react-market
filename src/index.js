// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error from "./pages/Erorr";
import { Provider } from "react-redux"; // Importez Provider depuis react-redux
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:productId" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
