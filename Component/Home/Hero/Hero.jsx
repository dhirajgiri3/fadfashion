import ImageScaleAnime from "@/Component/Animation/ImageScaleAnime";
import React from "react";
import svg2 from "@/Assets/Images/iPhone 15-2.svg";
import styled from "styled-components";
import WideButton from "@/Component/Animation/Buttons/WideButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const Container = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
    height: auto;
    justify-content: center;
    align-items: center;
  }

  .left {
    flex: 2;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    /* background: #ffb2b2; */
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 768px) {
      align-items: flex-start;
      justify-content: flex-start;
      width: 90%;
    }

    h1 {
      font-size: 9rem;
      line-height: 1.1;
      font-family: 'kurdasan';
      font-weight: 100;
      letter-spacing: 1px;

      @media screen and (max-width: 768px) {
        font-size: 6rem;
      }

      span {
        background-image: linear-gradient(90deg, #8630ff, #ff005c);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-weight: 100;
        font-family: "bulleto";
        font-size: 5rem;
      }
    }

    p {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
  .mid {
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: #84b5f9; */
    @media screen and (max-width: 768px) {
      align-items: center;
      justify-content: center;
    }
  }
  .right {
    flex: 2;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    /* background: #ff93eb; */
    @media screen and (max-width: 768px) {
      align-items: center;
      justify-content: center;
    }
  }
`;

function Hero() {
  return (
    <Container>
      <div className="left">
        <h1>
          Welcome to <br /> <span>FAD</span>{" "}
        </h1>
        <p>
          Welcome to FAD - the revolutionary fashion community platform where
          you can freely express your funky style, learn, and connect with
          like-minded fashion enthusiasts from all over the world. Embrace your
          fashion passion and earn money for your skills! Indulge without fear
          of judgment. Join us now
        </p>
      </div>
      <div className="mid">
        <WideButton
          text="Join FAD"
          fontsize="1.5rem"
          color="#eee"
          bg="transparent"
          hoverbg="#ff005c"
          hovercolor="#fff"
          bordercolor="#eeeeee50"
          mpaddingx="4rem"
          mpaddingy="1.2rem"
          mfontsize="1rem"
          title="Join Fad"
          height="15rem"
          width="15rem"
        />
      </div>
      <div className="right">
        <ImageScaleAnime imgUrl={svg2} className="iphone" />
      </div>
    </Container>
  );
}

export default Hero;
