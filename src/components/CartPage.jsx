import React, { useContext, useEffect, useState } from "react";
import { Cart } from "../context/Context";
import CardHome from "./CardHome";
import styled from "styled-components";
export const Cartpage = () => {
  const { cart, setCart } = useContext(Cart);
  const [total, setTotal] = useState(0);
  console.log(cart);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      <div>
        <h1>totall price : ${total}</h1>
      </div>
      <Container>
        {cart.map((prod) => (
          <CardHome prod={prod} key={prod.id} />
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  color: black;
  margin: 0 auto;
`;
