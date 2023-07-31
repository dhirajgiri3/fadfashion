import Link from "next/link";
import React from "react";
import styled from "styled-components";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Image from "next/image";
import logo from "@/Assets/Images/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  z-index: 0;

  @media screen and (max-width: 768px) {
    min-height: 80vh;
  }

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #00000099;
    z-index: 2;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10rem;
    flex-direction: column;
    gap: 10rem;

    @media screen and (max-width: 768px) {
      padding: 3rem;
      gap: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;

      .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5rem;

        @media screen and (max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 3rem;
        }

        a {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 500;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: #ff050c;
          }
        }
      }

      .right {
        cursor: pointer;
        padding: 3rem;
        background: #fff;
        border-radius: 100px;
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 3rem;
        align-items: flex-start;
      }

      .left {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 3rem;
        flex-direction: column;
        .top {
          img {
            height: 10rem;
            width: 10rem;

            @media screen and (max-width: 768px) {
              height: 7rem;
              width: 7rem;
            }
          }
        }

        .mid {
          width: 70%;

          @media screen and (max-width: 768px) {
            width: 100%;
          }

          p {
            color: #eee;
            font-size: 1.5rem;
            font-weight: 500;
            letter-spacing: 1px;
            line-height: 2.5rem;
          }
        }

        .bottom {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;

          a {
            text-decoration: none;
            p {
              font-size: 1.3rem;
              color: #eee;
              font-weight: 300;
            }
          }
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .icons {
          display: flex;
          gap: 3rem;

          a {
            color: #fff;
            transition: all 0.5s ease-in-out;

            &:hover {
              color: #ff050c;
            }
          }
        }

        p {
          white-space: nowrap;
          color: #fff;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer>
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://res.cloudinary.com/divbobkmd/video/upload/v1690758500/fad-reel-1_resize_j910nb.mp4"
        className="bgvideo"
      />
      <div className="overlay" />
      <div className="content">
        <div className="top">
          <div className="left">
            <Link href="/">Join the waitlist</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div onClick={scrollToTop} className="right">
            <KeyboardDoubleArrowUpIcon
              style={{
                color: "#ff050c",
                fontSize: "3rem",
              }}
            />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="top">
              <Image src={logo} alt={"fad logo"} />
            </div>
            <div className="mid">
              <p>
                new generation social media app that unlocks the vibrant world
                of fashion. Join us as we embark on an exciting journey of
                style, creativity, and trendsetting influencers. Get ready to
                explore the fashion universe like never before.
              </p>
            </div>
            <div className="bottom">
              <Link href="mailto:dhirajg934@gmail.com">
                {" "}
                <p>fad@gamil.com </p>
              </Link>

              <Link href="tel:+919904392992">
                {" "}
                <p>+91 9904392992 </p>
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="icons">
              <Link href="/">
                <InstagramIcon />
              </Link>
              <Link href="/">
                <FacebookIcon />
              </Link>
              <Link href="/">
                <TwitterIcon />
              </Link>
              <Link href="/">
                <YouTubeIcon />
              </Link>
            </div>
            <p>© 2021 FAD. All rights reserved.</p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
