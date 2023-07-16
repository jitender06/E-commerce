import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      {isOpen && <BackShadow onClick={toggleDrawer} />}

      <SDrawer isOpen={isOpen}>
        <CloaseButton>
          <AiFillCloseCircle onClick={toggleDrawer} />
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
`;

const CloaseButton = styled.button`
  all: unset;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
`;
