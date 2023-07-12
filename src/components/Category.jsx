import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Category = () => {
  const [products, setProducts] = useState([]);
  const AllProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      //   console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllProducts();
  }, []);
  return (
    <div>
      <div>
        <Carousel
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          autoPlay={true}
          selectedItem={6}
          infiniteLoop={true}
        >
          {products.map((cate) => {
            return (
              //   <span>{cate.title}</span>
              <img
                src={cate.thumbnail}
                alt={cate.title}
                style={{ width: "100%", height: "222px" }}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Category;
