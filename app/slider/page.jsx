"use client";

import ImageScaleAnime from "@/Component/Animation/ImageScaleAnime";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import svg1 from "@/Assets/Images/iPhone 15-1.svg";

const Video1Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  .content {
    height: 100vh;
    display: grid;
    grid-template-rows: 9fr 1fr;

    @media screen and (max-width: 1000px) {
      grid-template-rows: 8fr 2fr;
    }
    .top {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      background: #dac;

      @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 7fr 1fr;
      }

      .left {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        background: #00f;

        @media screen and (max-width: 1000px) {
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr;
        }
        .top {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #00f;
        }

        .mid {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bottom {
          display: flex;
          justify-content: center;
          align-items: center;
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
        background: #00f;

        @media screen and (max-width: 1000px) {
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr;
        }

        .top {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #00f;
        }

        .mid {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bottom {
          display: flex;
          justify-content: center;
          align-items: center;
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

function Video1() {
  return (
    <Video1Container>
      <div className="content">
        <div className="top">
          <div className="left">
            <div className="top">top</div>
            <div className="mid">mid</div>
            <div className="bottom">bottom</div>
          </div>
          <div className="mid">
            {" "}
            <ImageScaleAnime imgUrl={svg1} />
          </div>
          <div className="right">
            <div className="top">top</div>
            <div className="mid">mid</div>
            <div className="bottom">bottom</div>
          </div>
        </div>
        <div className="bottom">bottom</div>
      </div>
    </Video1Container>
  );
}

export default Video1;
