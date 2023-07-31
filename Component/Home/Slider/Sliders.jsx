"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import WideButton from "@/Component/Animation/Buttons/WideButton";
import img1 from "@/Assets/Images/img1.png";
import img2 from "@/Assets/Images/img2.png";
import img3 from "@/Assets/Images/img3.png";
import Image from "next/image";

gsap.registerPlugin(Flip);

const images = [img3, img2, img1];

const text = [
  "Unlock coupon and more by doing fashion",
  "Level up with fashion",
  "Create Share fashion",
];

const para = [
  "At every tier, they will unlock coupons for brands which they can redeem to purchase different products like clothes, accessories, etc.",
  "The users will start at Level 1. Gain points based on the likes they receive on their posts and profile visits to level up.",
  "Show your funky sense of fashion to people and learn about fashion without being judged.",
];

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  gap: 3rem;
  margin-top: 2rem;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  height: 67vh;
  width: 62vw;
  border-radius: 0;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 50vh;
    width: 87vw;
  }
`;

const Slide = styled(Image)`
  height: 65vh;
  width: 60vw;
  object-fit: contain;
  border-radius: 100%;
  transition: all 1s ease-in-out;

  @media screen and (max-width: 768px) {
    height: 45vh;
    width: 85vw;
    margin: 0 auto;
    border-radius: 100px;
  }
`;

const Sliderss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  width: 40vw;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    width: 85vw;
  }
`;

const ButtonDiv = styled.div`
  background-color: #aaaaaa20;
  border: none;
  padding: 10px;
  flex: 1;
  height: 65vh;
  color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  @media (max-width: 768px) {
    background: transparent;
    padding: 0;
    margin: 0;
    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  transition: all 1s ease-in-out;

  @media (max-width: 768px) {
    width: 85%;
    margin: 0 auto;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  flex: 1;
  font-family: "kurdasan";
  color: #eee;
  letter-spacing: 1px;
  transition: all 1s ease-in-out;
`;

const Para = styled.p`
  font-size: 1.5rem;
  flex: 1;
  font-family: "tenon";
  color: #eeeeee99;
  line-height: 1.5;
  letter-spacing: 1px;
  font-weight: 300;
  transition: all 1s ease-in-out;
`;

const Sliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);

  const items = images.map((image, index) => ({
    image,
    text: text[index],
    para: para[index],
  }));

  const slideAnimation = () => {
    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.1,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.7,
        delay: 0.3,
      }
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <SliderContainer>
        <Sliderss>
          <ImageContainer>
            <Slide
              src={items[currentIndex].image}
              alt={`Slide ${currentIndex}`}
              ref={imageRef}
            />
          </ImageContainer>
          <Content>
            <Heading title="FAD">{items[currentIndex].text}</Heading>
            <Para title="FAD">{items[currentIndex].para}</Para>
          </Content>
        </Sliderss>

        <Buttons>
          <ButtonDiv
            onClick={() => {
              handlePrevSlide();
              slideAnimation();
            }}
          >
            <WideButton
              text="Prev"
              fontsize="1.2rem"
              color="#ddd"
              bg="#232323"
              hoverbg="#ff005c"
              hovercolor="#fff"
              bordercolor="#303030"
              mbordercolor="#202020"
              mpaddingx="4rem"
              mpaddingy="1.2rem"
              mfontsize="1.5rem"
              height="14rem"
              width="7rem"
              mheight="6rem"
              mwidth="15rem"
            />
          </ButtonDiv>
          <ButtonDiv
            onClick={() => {
              handleNextSlide();
              slideAnimation();
            }}
          >
            <WideButton
              text="Next"
              fontsize="1.2rem"
              color="#ddd"
              bg="#232323"
              hoverbg="#ff005c"
              hovercolor="#fff"
              bordercolor="#303030"
              mbordercolor="#202020"
              mpaddingx="4rem"
              mpaddingy="1.2rem"
              mfontsize="1.5rem"
              height="14rem"
              width="7rem"
              mheight="6rem"
              mwidth="15rem"
            />
          </ButtonDiv>
        </Buttons>
      </SliderContainer>
    </div>
  );
};

export default Sliders;
