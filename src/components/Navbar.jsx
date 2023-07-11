import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSearchAlt2, BiCart } from "react-icons/bi";
import { FaGripLines } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import "./Navbar.css";
const Navbar = () => {
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
                    <Link>
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
            <input type="text" placeholder="Search Products" />
            <BiSearchAlt2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
