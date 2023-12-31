import React, { useContext } from "react";
import styled from "styled-components";
import { Cart } from "../context/Context";
import { Link } from "react-router-dom";

const CardHome = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);
  console.log(cart);
  return (
    <MainContainer>
      <Container>
        <Link to={"/product/" + prod.id} key={prod.id}>
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
          </Detail>
        </Link>
        {cart.includes(prod) ? (
          <Button onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}>
            Remove
          </Button>
        ) : (
          <Button onClick={() => setCart([...cart, prod])}>Add To Cart</Button>
        )}
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
  a {
    color: black;
  }
  @media (min-width: 721px) {
    width: 250px;
    height: 270px;
  }
`;
const Imagecontainer = styled.div`
  img {
    width: 100%;
    height: 90px;
    object-fit: cover;
    @media (min-width: 721px) {
      height: 150px;
    }
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
  left: 12px;
`;
