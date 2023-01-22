import Footer from "./Components/Footer";
import StoreFront from "./Components/Storefront";
import ShoppingCart from "./Components/ShoppingCart";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StoreFront />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product/:id" element={<ProductDetails />}/>
        </Routes>

      </BrowserRouter>

      <Footer />
    </>
  )
};

export default App;
