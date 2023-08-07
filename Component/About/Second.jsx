import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import ImageScaleAnime from "../Animation/ImageScaleAnime";
import svg1 from "@/Assets/Images/iPhone 15-1.svg";
import fad4 from "@/Assets/Images/fad-4.png";
import fad5 from "@/Assets/Images/fad-5.png";
import fad6 from "@/Assets/Images/fad-6.png";
import Image from "next/image";

function Second() {
  const SecondContainer = styled(motion.div)`
    min-height: 130vh;
    width: 85%;
    height: 100%;
    background: linear-gradient(170deg, #6b2426, #e76c24);
    backdrop-filter: blur(50px);
    margin: 2rem auto;
    margin-top: -9.5rem;
    position: relative;
    z-index: 0;
    border-radius: 40px;
    padding: 5rem;
    padding-top: 15rem;
    color: #fff;

    @media screen and (max-width: 1000px) {
      min-height: 130vh;
      padding: 1rem;
      padding-top: 13rem;
      margin-top: -7rem;
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      padding: 1rem;
      padding-top: 13rem;
      margin-top: -7rem;
      width: 100%;
      min-height: 120vh;
    }
    @media screen and (max-width: 376px) {
      padding: 1rem;
      padding-top: 13rem;
      margin-top: -8rem;
      width: 100%;
    }

    .content {
      height: 100vh;
      display: grid;
      grid-template-rows: 9fr 1fr;
      row-gap: 5rem;

      @media screen and (max-width: 1000px) {
        grid-template-rows: 8fr 2fr;
      }
      .top {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;

        @media screen and (max-width: 1000px) {
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 6fr 1fr;
        }

        .left {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          column-gap: 5rem;

          @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
          }

          @media screen and (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
          }

          .top {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
              font-size: 1.1rem;
              font-weight: 300;
              font-family: "tenon";
            }

            @media screen and (max-width: 768px) {
              display: none;
            }
          }

          .mid {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 15vw;
              height: 15vw;
              object-fit: cover;
              border-radius: 10px;

              @media screen and (max-width: 1000px) {
                width: 25vw;
                height: 25vw;
              }
            }
          }
          .bottom {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
              font-size: 1.1rem;
              font-weight: 300;
              font-family: "tenon";
            }
          }
        }
        .mid {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .right {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          column-gap: 5rem;

          @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
          }

          @media screen and (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
          }

          .top {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 15vw;
              height: 15vw;
              object-fit: cover;
              border-radius: 10px;
              @media screen and (max-width: 1000px) {
                width: 25vw;
                height: 25vw;
              }
            }

            @media screen and (max-width: 768px) {
              display: none;
            }
          }

          .mid {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
              font-size: 1.1rem;
              font-weight: 300;
              font-family: "tenon";
            }
          }
          .bottom {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 15vw;
              height: 15vw;
              object-fit: cover;
              border-radius: 10px;
              @media screen and (max-width: 1000px) {
                width: 25vw;
                height: 25vw;
              }
            }
          }
        }
      }

      .bottom {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  `;

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        stiffness: 100,
        damping: 5,
      },
    },
  };

  return (
    <SecondContainer variants={variants} initial="hidden" animate="visible">
      <div className="content">
        <div className="top">
          <div className="left">
            <div className="top">
              <p>
                {" "}
                show your funky sense of fashion to people and learn about
                fashion and do everything fashion without being judged.
              </p>
            </div>
            <div className="mid">
              <Image src={fad4} alt="Fad-about-image" />
            </div>
            <div className="bottom">
              {" "}
              <p>
                {" "}
                show your funky sense of fashion to people and learn about
                fashion and do everything fashion without being judged.
              </p>
            </div>
          </div>
          <div className="mid">
            <ImageScaleAnime imgUrl={svg1} />
          </div>
          <div className="right">
            <div className="top">
              <Image src={fad5} alt="Fad-about-image" />
            </div>
            <div className="mid">
              {" "}
              show your funky sense of fashion to people and learn about fashion
              and do everything fashion without being judged.
            </div>
            <div className="bottom">
              <Image src={fad6} alt="Fad-about-image" />
            </div>
          </div>
        </div>
        <div className="bottom">bottom</div>
      </div>
    </SecondContainer>
  );
}

export default Second;
