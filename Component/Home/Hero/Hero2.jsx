import WideButton from "@/Component/Animation/Buttons/WideButton";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import EastIcon from "@mui/icons-material/East";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";

const Hero2Container = styled.div`
  position: relative;
  z-index: 0;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  .video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 1;

    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.8) 70%,
      rgba(0, 0, 0, 0.99) 100% /* #5b0e11,
      #e17a40 */
    );
    z-index: 2;
    object-fit: cover;
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: 5rem;
    padding: 0 10rem;

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
      margin-bottom: 3rem;
    }

    .left {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 2rem;
      flex-direction: column;
      width: 100%;
      height: 100%;

      @media screen and (max-width: 768px) {
        gap: 3rem;
      }

      .top {
        h1 {
          font-family: "tenon";
          font-size: 10rem;
          font-weight: 700;
          width: 80%;

          @media screen and (max-width: 768px) {
            font-size: 6rem;
            width: 100%;
          }
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;

        @media screen and (max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 3rem;
        }

        .bleft {
          display: flex;
          gap: 3rem;

          a {
            text-decoration: none;

            .button {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 4.5rem;
              width: 14rem;
              border-radius: 100px;
              background: transparent;
              white-space: nowrap;
              color: #fff;
              border: 2px #fff solid;
              font-size: 1.5rem;
              cursor: pointer;
              transition: all 0.3s ease-in-out;
              font-weight: 100;
              font-family: "tenon";
              gap: 0.5rem;
              position: relative;
              z-index: 0;

              &::after {
                position: absolute;
                content: "";
                width: 0%;
                height: 100%;
                border-radius: 100px;
                background: #ff005c;
                z-index: -1;
                transition: all 0.3s ease-in-out;
              }

              &:hover {
                color: #eee;
                border: 2px #ff005c solid;

                &::after {
                  width: 100%;
                  behavior: smooth;
                }
              }
            }
          }
        }

        .bright {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          p {
            font-family: "tenon";
            line-height: 1.3;
            width: 40%;
            font-size: 1.3rem;
            color: #ffffff;
            backdrop-filter: blur(10px);
            font-weight: 500;
            display: flex;
            flex-direction: column;

            @media screen and (max-width: 768px) {
              width: 100%;
              font-size: 1.5rem;
              border-radius: 0px;
              padding: 0;
              background: transparent;
              backdrop-filter: blur(0);
            }
          }
        }
      }
    }
  }
`;

function Hero2() {
  const videoRef = useRef(null);
  return (
    <Hero2Container>
      <div className="video">
        <video
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
          src="https://res.cloudinary.com/divbobkmd/video/upload/v1690745994/fad-reel-2_AdobeExpress_simbrc.mp4"
          className="bgvideo"
        />
      </div>
      <div className="layer"></div>
      <div className="content">
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
          <div className="top">
            <h1>
              Welcome to <span>FAD</span>{" "}
            </h1>
          </div>
          <div className="bottom">
            <div className="bleft">
              <Link href="#form">
                <WideButton
                  text="How FAD works?"
                  fontsize="1.5rem"
                  color="#fff"
                  hoverbg="#ffffff"
                  bg="#ff005c"
                  hovercolor="#111"
                  bordercolor="#ff005c"
                  mfontsize="1rem"
                  title="Join Fad"
                  height="4.5rem"
                  width="15rem"
                />
              </Link>
              <Link href="/about">
                <button className="button">
                  What is FAD
                  <ArrowOutwardIcon
                    style={{
                      height: "1.5rem",
                    }}
                  />
                </button>
              </Link>
            </div>{" "}
            <div className="bright">
              <p>
                Welcome to FAD - the revolutionary fashion community platform
                where you can freely express your funky style, learn, and
                connect with like-minded fashion enthusiasts from all over the
                world. Embrace your fashion passion and earn money for your
                skills! Indulge without fear of judgment. Join us now
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Hero2Container>
  );
}

export default Hero2;
