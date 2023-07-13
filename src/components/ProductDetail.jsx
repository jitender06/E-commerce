import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { styled } from "styled-components";
import Rating from "./Rating";
import { Cart } from "../context/Context";

const ProductDetail = () => {
  const { cart, setCart } = useContext(Cart);

  const params = useParams();
  const [products, setProducts] = useState([]);
  const [pics, setPics] = useState([]);
  const AllProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      const data = await res.json();
      setProducts(data);
      setPics(data.images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllProducts();
  }, [params.id]);

  return (
    <div>
      <Imagecarousel>
        <Carousel
          showStatus={false}
          showIndicators={false}
          dynamicHeight={true}
          centerSlidePercentage={false}
        >
          {pics.map((item, i) => (
            <img
              src={item}
              alt={products.title}
              key={i}
              style={{
                width: "100%",
                maxHeight: "22rem",
                objectFit: "contain",
              }}
            />
          ))}
        </Carousel>
      </Imagecarousel>
      <Detail>
        <h1>{products.title}</h1>
        <Desc>{products.description}</Desc>
        <Rating rate={Math.floor(products.rating)} />
        <Pricing>
          <span>${products.price}</span>
          <span>{Math.ceil(products.discountPercentage)} % Off</span>
        </Pricing>
      </Detail>
      <Buttons>
        {cart.includes(products) ? (
          <button
            onClick={() => setCart(cart.filter((c) => c.id !== products.id))}
          >
            Remove
          </button>
        ) : (
          <button onClick={() => setCart([...cart, products])}>
            Add To Cart
          </button>
        )}
        <button>wishlist</button>
      </Buttons>
    </div>
  );
};

export default ProductDetail;

const Imagecarousel = styled.div``;
const Detail = styled.div`
  padding: 0 1rem;
  h1 {
    font-size: 2.5rem;
  }
`;
const Desc = styled.span`
  color: grey;
  margin: 0.7rem 0rem;
`;
const Pricing = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.5rem;
  :nth-last-child(1) {
    font-weight: bolder;
  }
`;
const Buttons = styled.div`
  padding: 0 1rem;
  margin: 1.7rem 0;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  button {
    outline: none;
    border: none;
    background-color: black;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 2rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }
`;
