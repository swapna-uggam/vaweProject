// pages/index.jsx

import BuyNow from "./components/BuyNow";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductsPage from "./components/ProductsPage";


export default function Home() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold text-center mt-8">Welcome to Our Store</h1> */}
      <Navbar/>
      <LandingPage/>
      <ProductsPage/>
      {/* <BuyNow/> */}
      <Footer/>
    </div>
  );
}



