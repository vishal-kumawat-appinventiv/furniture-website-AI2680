import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

const OrderScreen = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold">Orders</h1>
        <div className="flex items-center justify-center w-full my-16">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderScreen;
