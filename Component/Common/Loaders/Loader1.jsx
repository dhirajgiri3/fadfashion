import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import svg1 from "@/Assets/Images/iPhone 15-2.svg";
import ImageScaleAnime from "@/Component/Animation/ImageScaleAnime";

const Loader1Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #151515;
  position: fixed;
  z-index: 99998;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .overlay {
    height: 100vh;
    width: 100%;
    background: #9288f8;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
  }
`;

function Loader1() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    // Hide the overlay with a bounce animation
    gsap.to(overlay, {
      width: 0,
      duration: 1,
      ease: "power4.inOut",
      delay: .5,
      transformOrigin: "center",
    });

    gsap.to(container, {
      width: 0,
      duration: 2.5,
      ease: "power4.inOut",
      delay: 1.5,
      transformOrigin: "center",
      // yoyo: true,
      // yoyoEase: "easeInOut",
      // repeat: -1,
    });
  }, []);

  return (
    <Loader1Container ref={containerRef}>
      <ImageScaleAnime imgUrl={svg1} />
      <div className="overlay" ref={overlayRef}></div>
    </Loader1Container>
  );
}

export default Loader1;
