import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return (
    <Wrapper style={{ width: size, height: size, background: color }}></Wrapper>
  );
};

const makeMeGrow = keyframes`
from {
 scale: 0;
 opacity: 1;
}
to {
 scale: 1;
 opacity: 0.35;
}
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  border-radius: 50%;
  animation: ${makeMeGrow} 800ms ease-in-out;
  scale: 0;
`;

export default PoppingCircle;
