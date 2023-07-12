import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { styled } from "styled-components";
import Rating from "./Rating";

const ProductDetail = () => {
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
        <span>{products.description}</span>
        <Rating rate={Math.floor(products.rating)} />
        <div>
          <span>${products.price}</span>
          <span>{Math.ceil(products.discountPercentage)} % Off</span>
        </div>
      </Detail>
      <Buttons>
        <button>Cart</button>
        <button>wishlist</button>
      </Buttons>
    </div>
  );
};

export default ProductDetail;

const Imagecarousel = styled.div``;
const Detail = styled.div`
  padding: 0 1rem;
`;
const Buttons = styled.div``;
