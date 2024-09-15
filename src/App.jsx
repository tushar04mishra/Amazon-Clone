import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import NavbarBelt from "./components/NavbarBelt";
import HomeScreen from "./components/HomeScreen";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<Product></Product>} />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
