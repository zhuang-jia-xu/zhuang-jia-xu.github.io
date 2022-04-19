import { useSpring, animated, easings } from "react-spring";
import { BsChevronDown } from "react-icons/bs";

export const BouncingChevron = () => {
  const bounceStyle = useSpring({
    config: {
      duration: 1500,
      easing: easings.easeInOutCubic,
    },
    loop: {
      reverse: true,
    },
    from: { top: 10 },
    to: { top: -10 },
  });
  return (
    <animated.div className="relative opacity-50" style={bounceStyle}>
      <BsChevronDown fontSize="100px" color="white" />
    </animated.div>
  );
};
