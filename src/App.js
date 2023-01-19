import React from "react";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/Products";
import SimpleCart from "./Components/SimpleCart";

const App = () => {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <SimpleCart />
      <Footer />
    </>
  )
};

export default App;
