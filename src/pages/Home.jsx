import React, { useEffect, useState } from "react";
import Styled, { styled } from "styled-components";
import CardHome from "../components/CardHome";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [totalPage, settotalPage] = useState(0);
  const [page, setPage] = useState(1);

  const AllProducts = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${page * 20 - 20}`
      );
      const data = await res.json();
      setProducts(data.products);
      settotalPage(data.total / 10);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllProducts();
  }, [page]);

  const paginationHandler = (i) => {
    if (page >= 1 && page <= totalPage && i != page) {
      setPage(i);
    }
  };

  return (
    <>
      <ProdContainer>
        {products.map((prod) => (
          <CardHome prod={prod} key={prod.id} />
        ))}
      </ProdContainer>
      <Container>
        <Pagg>
          <span onClick={() => setPage(page - 1)}>◀</span>

          {[...Array(totalPage)].map((_, i) => {
            return (
              <span
                className={i + 1 === page ? "fill" : ""}
                key={i}
                onClick={() => paginationHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span onClick={() => setPage(page + 1)}>▶</span>
        </Pagg>
      </Container>
    </>
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
`;
const Pagg = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  /* border: 1px solid black; */

  span {
    border: 1px solid black;
    padding: 0.5rem;
    cursor: pointer;
  }
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
