import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSearchAlt2, BiCart } from "react-icons/bi";
import { FaGripLines } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import "./Navbar.css";
import Search from "../pages/Search";
const Navbar = () => {
  const [query, setQuery] = useState("");

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="upper">
          <nav>
            <div className="left">
              <button>
                <FaGripLines />
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
                      <span>1</span>
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
          <div className="search">
            <input
              type="text"
              placeholder="Search Products"
              value={query}
              onChange={(e) => changeHandler(e)}
            />

            <Link to={"/search/" + query} onClick={() => setQuery("")}>
              <BiSearchAlt2 />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
