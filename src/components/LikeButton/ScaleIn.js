import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const style = useSpring({
    zIndex: 2,
    opacity: 1,
    transform: "scale(1)",
    from: {
      opacity: 0,
      transform: "scale(0.2)",
    },
    config: {
      tension: 400,
      friction: 6.5,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export default ScaleIn;
