import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2, BiCart } from "react-icons/bi";
import { FaGripLines } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Navbar.css";
import { Cart } from "../context/Context";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { cart, setCart } = useContext(Cart);
  const [click, setClick] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // 👈️ prevent page refresh
    navigate("/search/" + query, { replace: true });
    setQuery("");
  };
  return (
    <>
      <div className="container">
        <div className="upper">
          <nav>
            <div className="left">
              <button className="mobileNav">
                <div className={click ? "mobileLinks" : "nav-disable"}></div>
                {click ? (
                  <AiFillCloseCircle
                    className={click ? "close" : "disable"}
                    onClick={() => setClick(false)}
                  />
                ) : (
                  <FaGripLines
                    className="open"
                    onClick={() => setClick(true)}
                  />
                )}
              </button>
              <Link to="/">
                <HiShoppingBag />
              </Link>
            </div>
            <div className="right">
              <div className="nav-links">
                <ul>
                  <li className="cart">
                    <Link to="/cart">
                      <BiCart />
                      <span>{cart.length}</span>
                    </Link>
                  </li>
                  <li>
                    <Link>Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="bottom">
          <form className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <Link to={"/search/" + query} onClick={() => setQuery("")}>
              <BiSearchAlt2 />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
