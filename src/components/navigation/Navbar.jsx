import React, { useContext, useState } from "react";
import styled from "styled-components";
import { routes } from "./NavJson";
import { Link, useNavigate } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
import { BiSearchAlt2, BiCart } from "react-icons/bi";
import { Cart } from "../../context/Context";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggleDrawer }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { cart, setCart } = useContext(Cart);

  const handleSubmit = (event) => {
    event.preventDefault(); // 👈️ prevent page refresh
    navigate("/search/" + query, { replace: true });
    setQuery("");
  };

  return (
    <SNavbar>
      <Nav>
        <NavLeft>
          <DrawerButton onClick={toggleDrawer}>
            <FaBars />
          </DrawerButton>
          <Link to="/">
            <HiShoppingBag />
          </Link>
        </NavLeft>
        <NavRight>
          <SearchContainer className="bottom">
            <Form className="search" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search Products"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <Link to={"/search/" + query} onClick={() => setQuery("")}>
                <BiSearchAlt2 />
              </Link>
            </Form>
          </SearchContainer>

          <Router>
            {routes.map((item) => (
              <Route to={item.link} key={item.name}>
                {item.name}
              </Route>
            ))}
          </Router>
          <BtnCart>
            <CartContainer>
              <Link to="/cart">
                <BiCart />
                <span>{cart.length}</span>
              </Link>
            </CartContainer>
            <Button>Login</Button>
          </BtnCart>
        </NavRight>
      </Nav>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  display: grid;
  cursor: pointer;
  font-size: 1.5rem;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const SNavbar = styled.div`
  background-color: rgb(106, 151, 57);
`;
const Nav = styled.div`
  max-width: 1300px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  @media (max-width: 768px) {
    gap: 4rem;
  }
`;
const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  a {
    color: white;
    font-size: 2.8rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Router = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.6rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const Route = styled(Link)`
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    color: black;
    background-color: white;
    transition: 0.5s ease;
  }
`;
const Button = styled.button`
  all: unset;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    color: rgb(106, 151, 57);
    transition: 0.5s ease;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const BtnCart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchContainer = styled.div``;
const Form = styled.form`
  display: flex;
  align-items: center;
  input {
    all: unset;
    background-color: white;
    height: 2.4rem;
    padding: 0 1rem;
    font-size: 1.3rem;
    @media (max-width: 768px) {
      height: 1.6rem;
      padding: 0 0.5rem;
      font-size: 0.7rem;
      width: 100%;
    }
  }
  a {
    background-color: white;
    color: black;

    svg {
      font-size: 2.4rem;
      @media (max-width: 768px) {
        font-size: 1.6rem;
      }
    }
  }
`;

const CartContainer = styled.div`
  margin: auto 0;
  position: relative;
  a {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    color: white;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    span {
      position: absolute;
      top: -19px;
      right: -7px;
      background-color: black;
      color: white;
      font-size: 13px;
      padding: 0.3rem 0.5rem;
      border-radius: 50%;
      @media (max-width: 768px) {
        font-size: 0.6rem;
        top: -15px;
      }
    }
  }
`;
