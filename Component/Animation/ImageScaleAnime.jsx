"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/all";
import styled from "styled-components";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const AboutContainer = styled.div`
  position: relative;
  padding: 1rem;
  width: 20vw;
  height: calc(55vh * 1.2);

  @media screen and (max-width: 768px) {
    width: 70vw;
    margin-top: 3rem;
  }

  .images {
    position: relative;

    .svg {
      width: 100%;
      position: absolute;
      transition: scale 0.5s ease-in-out;
      object-fit: contain;
      height: 55vh;
    }
  }
`;

function ImageScaleAnime({ imgUrl, iPhoneRef }) {
  useEffect(() => {
    const items = gsap.utils.toArray(".svg");
    const state = Flip.getState(items);
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(items, {
      duration: 2,
      stagger: 0.2,
      ease: "power2.inOut",
      scale: 1.3,
      // rotate: 360,
      yoyo: true,
      yoyoEase: true,
      repeat: -1,
    });
  }, []);

  return (
    <AboutContainer className="container">
      <div className="images" ref={iPhoneRef}>
        <div className="img1">
          <Image src={imgUrl} alt="svg1" className="svg svg1" />
        </div>
        <div className="img2">
          <Image src={imgUrl} alt="svg2" className="svg svg2" />
        </div>
        <div className="img2">
          <Image src={imgUrl} alt="svg2" className="svg svg2" />
        </div>
        <div className="img2">
          <Image src={imgUrl} alt="svg2" className="svg svg2" />
        </div>
      </div>
    </AboutContainer>
  );
}

export default ImageScaleAnime;
