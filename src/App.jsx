import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ProductCategory from "./screens/ProductCategory";
import ProductScreen from "./screens/ProductScreen";
import OrderScreen from "./screens/OrderScreen";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orders" element={<OrderScreen />} />
          <Route
            path="/product-category/:prodName"
            element={<ProductCategory />}
          />
          <Route
            path="/product/:prodName"
            element={<ProductScreen />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
