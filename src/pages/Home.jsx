import React from "react";
import Styled, { styled } from "styled-components";
const Home = () => {
  return (
    <div>
      <HH>HOMEEEEEE</HH>
    </div>
  );
};

export default Home;

const HH = styled.h1`
  font-size: 2rem;
  background-image: linear-gradient(
    to right,
    rgb(255, 243, 49),
    rgb(255, 117, 49)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
