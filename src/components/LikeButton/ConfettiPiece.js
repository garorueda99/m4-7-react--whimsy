import React from "react";
import styled from "styled-components";
import Particle from "./Particle";

const ConfettiPiece = ({ angle, distance, color }) => {
  return (
    <CenteredInsideParent>
      <Particle angle={angle} distance={distance}>
        <Circle
          style={{
            backgroundColor: color,
          }}
        />
      </Particle>
    </CenteredInsideParent>
  );
};

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const CenteredInsideParent = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default ConfettiPiece;
