import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return <Wrapper></Wrapper>;
};

const turnBlue = keyframes`
  from {
    color: inherit;
    scale: 1;
  }
  to {
    color: blue;
    scale: 10.5;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  border-radius: 50%;
  border: 2px solid blue;
  background-color: blue;
  animation: ${turnBlue} 500ms;
  scale: 0;
`;

export default PoppingCircle;
