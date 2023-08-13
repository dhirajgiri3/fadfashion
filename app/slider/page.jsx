"use client";

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const SplitReveal = () => {
  const text = `
    FAD isn't just a fleeting trend,
    It's a fashion realm where talents ascend.
    A social platform where styles take flight,
    And creativity sparkles with pure delight.
  
    Unleash your passion, break every chain,
    In this vibrant community's terrain.
    Express without judgment, be your own star,
    Fashion's playground, no limits to how far.
  
    Connect with fashionistas, a global array,
    Learn from innovators, in your own way.
    A revolutionary blend of fashion and more,
    A social haven where talents galore.
  
    Earn for your skills, your art on display,
    A true trendsetter, come what may.
    FAD's purpose is clear, a pathway so grand,
    To turn your love for fashion into something grand.
  
    Revolutionizing the social media sphere,
    Where fashion's the language, loud and clear.
    Join the movement, seize the stage,
    Let your style and skills engage.
  
    In the Fashion Odyssey, a world so divine,
    FAD creates magic, let your talent shine.
    Come, embrace this platform, trend and friend,
    FAD, where your fashion journey knows no end.
  `;

  const letters = text.split("");
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const Container = styled.div`
    width: 100%;
    height: 200vh;

    span {
      font-size: 1rem;
      color: #fff;
      line-height: 1.5;
      letter-spacing: 0.5px;
      font-weight: 300;
    }
  `;

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  const transition = {
    duration: 0.3,
    delay: 0.03,
    ease: "easeInOut",
  };

  return (
    <div ref={ref}>
      <Container>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={animationVariants.hidden}
            animate={
              inView ? animationVariants.visible : animationVariants.hidden
            }
            transition={{
              ...transition,
              delay: index * transition.delay,
            }}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {letter === "\n" ? <br /> : letter}
          </motion.span>
        ))}
      </Container>
    </div>
  );
};

export default SplitReveal;

