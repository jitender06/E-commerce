import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Cart } from "./components/Cart";
import Category from "./components/Category";
import ProductDetail from "./components/ProductDetail";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Category /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search/:name" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
