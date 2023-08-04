import ImageScaleAnime from "@/Component/Animation/ImageScaleAnime";
import React, { useState, useRef } from "react";
import svg2 from "@/Assets/Images/iPhone 15-2.svg";
import styled from "styled-components";
import WideButton from "@/Component/Animation/Buttons/WideButton";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  z-index: 0;

  @media screen and (max-width: 375px) {
    min-height: 110vh;
  }

  .icon {
    position: absolute;
    cursor: pointer;
    bottom: -15rem;
    right: 7rem;

    @media screen and (max-width: 768px) {
      position: absolute;
      bottom: -3rem;
      right: 5rem;
    }

    @media screen and (max-width: 375px) {
      position: absolute;
      bottom: 3rem;
      right: 5rem;
    }
  }

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(0, 0, 0, 0.8);
    z-index: 2;
    /* backdrop-filter: blur(10px); */
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    align-items: center;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    margin-top: 15rem;
    padding: 0 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
      padding: 1rem;
      margin-top: 17rem;
      flex-direction: column;
      gap: 5rem;
    }
    @media screen and (max-width: 375px) {
      padding: 1rem;
      margin-top: 12rem;
      flex-direction: column;
      gap: 5rem;
    }

    .left {
      flex: 2;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
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
        font-family: "kurdasan";
        font-weight: 100;
        letter-spacing: 1px;

        @media screen and (max-width: 768px) {
          font-size: 6rem;
        }

        span {
          background-image: linear-gradient(90deg, #ffffff, #ff005c);
          background-size: 100%;
          background-repeat: repeat;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
          font-weight: 100;
          font-family: "tenon-bold";
          font-size: 9rem;
        }
      }

      p {
        font-size: 1.5rem;
        line-height: 1.5;
        width: 70%;

        @media screen and (max-width: 768px) {
          width: 100%;
        }
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
      align-items: center;
      justify-content: flex-end;
      /* background: #ff93eb; */
      @media screen and (max-width: 768px) {
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

function Hero() {
  const [mute, setMute] = useState(true);
  const videoRef = useRef(null);

  const handleMute = () => {
    setMute(!mute);
    videoRef.current.muted = !mute;
  };

  return (
    <Container>
      <video
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
        src="https://res.cloudinary.com/divbobkmd/video/upload/v1690745994/fad-reel-2_AdobeExpress_simbrc.mp4"
        className="bgvideo"
      />
      <div className="overlay" />
      <div className="content">
        <div onClick={handleMute} className="icon">
          {mute ? (
            <VolumeOffIcon
              style={{
                color: "#ccc",
                fontSize: "2.5rem",
              }}
            />
          ) : (
            <VolumeDownIcon
              style={{
                color: "#ccc",
                fontSize: "2.5rem",
              }}
            />
          )}
        </div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeOut",
              delay: 0.3,
              repeat: false,
              type: "spring",
              stiffness: 100,
            },
          }}
          className="left"
        >
          <h1>
            Welcome to <br /> <span>FAD</span>{" "}
          </h1>
          <p>
            Welcome to FAD - the revolutionary fashion community platform where
            you can freely express your funky style, learn, and connect with
            like-minded fashion enthusiasts from all over the world. Embrace
            your fashion passion and earn money for your skills! Indulge without
            fear of judgment. Join us now
          </p>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeOut",
              delay: 0.3,
              repeat: false,
              type: "spring",
              stiffness: 100,
            },
          }}
          className="mid"
        >
          <WideButton
            text="Join FAD"
            fontsize="1.5rem"
            color="#111"
            bg="#ffffff"
            hoverbg="#ff005c"
            hovercolor="#fff"
            bordercolor="#fff"
            mpaddingx="4rem"
            mpaddingy="1.2rem"
            mfontsize="1rem"
            title="Join Fad"
            height="15rem"
            width="15rem"
          />
        </motion.div>
      </div>
    </Container>
  );
}

export default Hero;
