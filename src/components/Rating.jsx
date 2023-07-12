import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Rating = ({ rate }) => {
  return (
    <>
      <Container>
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {rate > i ? (
              <AiFillStar style={{ fontSize: "15px" }} />
            ) : (
              <AiOutlineStar style={{ fontSize: "15px" }} />
            )}
          </span>
        ))}
      </Container>
    </>
  );
};

export default Rating;

const Container = styled.div`
  display: flex;
`;
