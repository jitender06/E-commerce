import React, { useEffect, useState } from "react";
import Styled, { styled } from "styled-components";
import CardHome from "../components/CardHome";
import { Link } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);
  const AllProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      // console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllProducts();
  }, []);

  return (
    <ProdContainer>
      {products.map((prod) => (
        <CardHome prod={prod} />
      ))}
    </ProdContainer>
  );
};

export default Home;

const ProdContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  color: black;
  margin: 0 auto;
`;

// const HH = styled.h1`
//   font-size: 2rem;
//   background-image: linear-gradient(
//     to right,
//     rgb(255, 243, 49),
//     rgb(255, 117, 49)
//   );
//   -webkit-text-fill-color: transparent;
//   -webkit-background-clip: text;
// `;
