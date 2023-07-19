import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { routes } from "./NavJson";
import { Link } from "react-router-dom";
const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      {isOpen && <BackShadow onClick={toggleDrawer} />}

      <SDrawer isOpen={isOpen}>
        <CloaseButton>
          <AiFillCloseCircle onClick={toggleDrawer} />
          <Router>
            {routes.map((item) => (
              <Route to={item.link} key={item.name}>
                {item.name}
              </Route>
            ))}
          </Router>
        </CloaseButton>
      </SDrawer>
    </>
  );
};

export default Drawer;
const BackShadow = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: 0.5s ease;
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  width: 70%;
  height: 100%;
  background-color: rgb(106, 151, 57);
  transition: 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  overflow: hidden;
`;

const CloaseButton = styled.button`
  all: unset;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
`;

const Router = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;
const Route = styled(Link)`
  color: white;
`;
