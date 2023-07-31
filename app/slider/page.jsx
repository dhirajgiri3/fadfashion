"use client";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Video1Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    height: 80vh;
    width: 70%;
    object-fit: cover;
    border-radius: 100px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      height: 90vh;
      width: 100%;
    }
  }
`;

function Video1() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  });

  const handlevideoClick = () => {
    if (videoRef.current.pause()) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <Video1Container>
      <video
        ref={videoRef}
        onClick={handlevideoClick}
        src="https://res.cloudinary.com/divbobkmd/video/upload/v1690745994/fad-reel-2_AdobeExpress_simbrc.mp4"
        className="video"
      />
    </Video1Container>
  );
}

export default Video1;
