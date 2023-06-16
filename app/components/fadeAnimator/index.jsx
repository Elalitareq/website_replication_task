"use client"
import { useInView, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const FadeAnimator = ({ children ,y=75,x=0,h="fit-content",w="100%"}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls=useAnimation()
  useEffect(() => {
    //animate presense
    if (isInView) {
      mainControls.start("visible")
    } else {
      mainControls.stop("visible")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <div style={{width:w,position:"relative",height:h}} ref={ref}>

    <motion.div
    variants={{
        hidden: { opacity: 0, y: y, x: x },
        visible: { opacity: 1, y: 0 ,x:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: .7, delay: 0.25 }}
    >
      {children}
    </motion.div>
          </div>
  );
};

export default FadeAnimator;
