import React, { useEffect, useRef, useState } from "react";
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
  margin: 10rem 0;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 0 2rem;
  }

  video {
    height: 95vh;
    width: 100vw;
    object-fit: cover;
    border-radius: 50px;
    cursor: pointer;
    
    @media screen and (max-width: 768px) {
      height: 90vh;
      width: 100%;
      border-radius: 500px;
    }
  }

  .cursor {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 10rem;
    width: 10rem;
    background: #202020;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    transition: all 1s ease-in-out;
    font-size: 1.5rem;
    letter-spacing: 1px;
    cursor: pointer;
    /* mix-blend-mode: difference; */
    border: none;
    outline: none;
    color: #fff;

  }
`;

function Video1() {
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleVideoPlay = () => {
      try {
        if (isPlaying) {
          videoRef.current.muted = false;
          videoRef.current.play();
          cursorRef.current.style.display = "none";
          cursorRef.current.style.transition = "display 1s ease-in-out";
        } else {
          videoRef.current.muted = true;
          videoRef.current.pause();
          cursorRef.current.style.display = "flex";
          cursorRef.current.style.transition = "display 1s ease-in-out";
        }
      } catch (error) {
        console.error("Error occurred while playing the video:", error);
      }
    };

    handleVideoPlay();
  }, [isPlaying]);

  const handleVideoClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleMouseEnter = () => {
    cursorRef.current.style.transition = "opacity 0.3s ease-in-out"; // Hide the custom cursor with a smooth transition
    cursorRef.current.style.opacity = "0";
  };

  const handleMouseLeave = () => {
    cursorRef.current.style.transition = "opacity 0.3s ease-in-out"; // Show the custom cursor with a smooth transition
    cursorRef.current.style.opacity = "1";
  };

  return (
    <Video1Container>
      <video
        ref={videoRef}
        autoPlay
        loop
        onClick={handleVideoClick}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        src="https://res.cloudinary.com/divbobkmd/video/upload/v1690745994/fad-reel-2_AdobeExpress_simbrc.mp4"
        className="video"
      />
      <div onClick={handleVideoClick} ref={cursorRef} className="cursor">
        Play
      </div>
    </Video1Container>
  );
}

export default Video1;
