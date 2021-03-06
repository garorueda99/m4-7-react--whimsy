import React from "react";
import styled from "styled-components";
import { range } from "../../utils";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";
import ConfettiPiece from "./ConfettiPiece";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ isLiked, size = 40 }) => {
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLiked && <PoppingCircle size={size} color="#E790F7" />}
      {isLiked ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLiked} />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLiked} />
      )}
      {isLiked &&
        range(12).map((i) => (
          <ConfettiPiece
            key={i}
            angle={360 * (i / 12)}
            distance={20}
            color={PARTICLE_COLORS}
          />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
