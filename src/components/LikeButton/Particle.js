import React from "react";
import { useSpring, animated } from "react-spring";

const Particle = ({ children }) => {
  const style = useSpring({
    zIndex: 2,
    opacity: 1,
    position: "absolute",
    transform: "scale(1)",
    from: {
      opacity: 0,
      transform: "scale(0.2)",
      x: "0",
      y: "0",
    },
    config: {
      tension: 400,
      friction: 6.5,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export default Particle;
