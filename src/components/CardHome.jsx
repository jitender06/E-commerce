import React from "react";
import styled from "styled-components";
const CardHome = ({ prod }) => {
  return (
    <MainContainer>
      <Container>
        <Imagecontainer>
          <img src={prod.thumbnail} alt={prod.id} />
        </Imagecontainer>
        <Detail>
          <h2>{prod.title}</h2>
          <Prices>
            <span>${prod.price}</span>
            <span>
              <b>Min. {Math.floor(prod.discountPercentage)}% Off</b>
            </span>
          </Prices>
          <Button>Add To Cart</Button>
        </Detail>
      </Container>
    </MainContainer>
  );
};

export default CardHome;
const MainContainer = styled.div`
  margin: 0 auto;
`;
const Container = styled.div`
  width: 160px;
  height: 200px;
  border: 1px solid black;
  position: relative;
`;
const Imagecontainer = styled.div`
  img {
    width: 100%;
    height: 90px;
    object-fit: cover;
  }
`;
const Detail = styled.div`
  padding: 0 0.5rem;
  h2 {
    font-size: 0.9rem;
  }
`;
const Prices = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;
const Button = styled.button`
  outline: none;
  border: 1px solid black;
  background: black;
  color: white;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  position: absolute;
  bottom: 12px;
`;
