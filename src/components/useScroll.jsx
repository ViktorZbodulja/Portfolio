import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

//executing every time it comes in view
export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view, controls]);

  return [element, controls];
};

//executing only once when comes in view
export const useScrollHome = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (view && !hasAnimated) {
      controls.start("show");
      setHasAnimated(true);
    }
  }, [view, controls, hasAnimated]);

  return [element, controls];
};