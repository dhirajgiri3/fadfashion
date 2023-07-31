import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const VidParaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  overflow-y: scroll;
  flex-direction: column;
  gap: 3rem;

  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
    font-family: "tenon";
    font-size: 5rem;
    text-align: left;
    font-weight: 700;
    background-image: linear-gradient(45deg, #fff, #ff7fae, #ff005c);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
  }

  h3 {
    font-family: "kurdasan";
    font-size: 3rem;
    color: #fff;
    text-align: left;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 2.5;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      line-height: 2;
    }

    span {
      video {
        width: 25vw;
        height: 20vh;
        object-fit: cover;
        border-radius: 100px;
        cursor: pointer;

        @media screen and (max-width: 768px) {
          height: 15vh;
          width: 70vw;
          margin: 1rem 0;
        }
      }
    }
  }
`;

function VidPara() {
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  return (
    <VidParaContainer>
      <h1>Create, Share, and Stay Updated</h1>
      <h3>
        At FDA, we believe in giving you the power to create and share your
        fashion sense, knowledge, and skills. Be the influencer you aspire to
        be, showcasing your unique style and inspiring others in the process.
        <span>
          <motion.video
            initial={{
              y: "100%",
              opacity: 0,
            }}
            whileInView={{
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
            autoPlay
            loop
            playsInline
            muted={isMuted}
            ref={videoRef}
            onClick={handleToggleMute}
            src="https://res.cloudinary.com/divbobkmd/video/upload/v1690836829/trial004_crtrci.mp4"
          ></motion.video>
        </span>
        With FDA, you'll never miss a moment in the fashion scene. Stay updated
        with the latest trends, events, and insider knowledge, all in one place.
      </h3>
    </VidParaContainer>
  );
}

export default VidPara;
