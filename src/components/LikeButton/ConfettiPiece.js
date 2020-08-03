import React from "react";
import styled from "styled-components";

const ConfettiPiece = ({ angle, distance, color }) => {
  const angleInRads = (angle) => (angle * Math.PI) / 180;
  const x = Math.cos(angleInRads(angle)) * distance;
  const y = Math.sin(angleInRads(angle)) * distance;
  return (
    <Circle
      style={{
        backgroundColor: color,
        top: y + 15 + "px",
        left: x + 15 + "px",
      }}
    ></Circle>
  );
};

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 10px;
  height: 10px;
`;

export default ConfettiPiece;
