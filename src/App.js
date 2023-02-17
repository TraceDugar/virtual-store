import Footer from "./Components/Footer";
import StoreFront from "./Components/Storefront";
import ShoppingCart from "./Components/ShoppingCart";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";

// The Main body of the App.

const App = () => {
  return (
    <>
      {/* The Browser router component allows navigation within the app to different pages. */}
      <BrowserRouter>

        {/* The Header component is above the pages in the app to be present over every page. */}
        <Header />

        {/* The Routes wrap each page for navigation within the App. */}
        <Routes>

          {/* The / Route is the landing page or  StoreFront component where the customer can navigate the store Categories component and Products Components. */}
          <Route path="/" element={<StoreFront />} />

          {/* The /cart Route navigates to the ShoppingCart component which is where the customer can checkout after the purchase. */}
          <Route path="/cart" element={<ShoppingCart />} />

          {/*  The /product/:id route navigates to the ProductDetails coponent which allows the customer to get more in depth details about the product itself. */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>

      {/* The Foother Coponent is below the pages in order to be ever present within the app no matter the page. */}
      <Footer />
    </>
  )
};

export default App;
