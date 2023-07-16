import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Category from "./components/Category";
import ProductDetail from "./components/ProductDetail";
import Search from "./pages/Search";
import { Cartpage } from "./components/CartPage";
import Navigation from "./components/navigation/Navigation";
function App() {
  return (
    <>
      <Navigation />
      {/* <Category /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search/:name" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
