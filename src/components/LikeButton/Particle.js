import React from "react";
import { useSpring, animated } from "react-spring";

const Particle = ({ children, angle, distance }) => {
  const angleInRads = (angle) => (angle * Math.PI) / 180;
  const x = Math.cos(angleInRads(angle)) * distance;
  const y = Math.sin(angleInRads(angle)) * distance;

  const style = useSpring({
    position: "absolute",
    opacity: 1,
    transform: `scale(1)`,
    from: {
      opacity: 0,
      transform: "scale(0.2)",
    },
    config: {
      tension: 800,
      friction: 3.5,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export default Particle;
