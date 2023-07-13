import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardHome from "../components/CardHome";
import { styled } from "styled-components";

const Search = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  const AllProducts = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${params.name}`
      );
      const data = await res.json();
      // console.log(data);
      if (data) {
        setProducts(data.products);
      } else console.log("put valid input");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllProducts();
  }, [params.name]);
  return (
    <Container>
      {products.map((prod) => (
        <Link to={"/product/" + prod.id}>
          <CardHome prod={prod} />
        </Link>
      ))}
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  a {
    color: black;
    margin: 0 auto;
  }
`;
