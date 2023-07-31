"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Images({ imagesRef }) {
  const handleDistortionAnimation = (element) => {
    const tl = gsap.timeline({
      paused: true,
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    });

    // Set up the initial state of the animation
    tl.set(element, { filter: "blur(0) distort(0)" });

    // Define the distortion animation
    tl.to(
      element,
      {
        duration: 1,
        filter: "blur(3px) distort(0.1)",
        ease: "power2.inOut",
      },
      // Iterate over each pixel in the image and distort it
      (_, i) => {
        const pixel = element.getContext("2d").getImageData(i, 0, 1, 1);
        pixel.data[0] = pixel.data[0] + Math.random() * 255;
        pixel.data[1] = pixel.data[1] + Math.random() * 255;
        pixel.data[2] = pixel.data[2] + Math.random() * 255;
        element.getContext("2d").putImageData(pixel, i, 0);
      }
    );

    // Attach event handlers for hover animation
    element.addEventListener("mouseenter", () => {
      tl.play();
    });

    element.addEventListener("mouseleave", () => {
      tl.reverse();
    });
  };

  useEffect(() => {
    imagesRef.current.forEach((element) => {
      handleDistortionAnimation(element);

      // Define the event listener functions for mouseenter and mouseleave
      const handleMouseEnter = () => {
        gsap.to(element, { duration: 0.2, scale: 1.2 });
      };

      const handleMouseLeave = () => {
        gsap.to(element, { duration: 0.2, scale: 1 });
      };
    });
  }, [imagesRef]);

  return (
    <div className="intro-grid-wrap">
      <div className="intro-grid intro-grid--images">
        <div
          className="intro-grid__img pos-11"
          ref={(el) => (imagesRef.current[0] = el)}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80)",
          }}
        ></div>

        <div
          className="intro-grid__img pos-9"
          ref={(el) => (imagesRef.current[1] = el)}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
          }}
        ></div>

        <div
          className="intro-grid__img pos-17"
          ref={(el) => (imagesRef.current[2] = el)}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80)",
          }}
        ></div>

        <div
          className="intro-grid__img pos-21"
          ref={(el) => (imagesRef.current[3] = el)}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=495&q=80)",
          }}
        ></div>
        <div
          className="intro-grid__img pos-13"
          ref={(el) => (imagesRef.current[4] = el)}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)",
          }}
        ></div>

        <div
          className="intro-grid__img pos-18"
          ref={(el) => (imagesRef.current[5] = el)}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1553544260-f87e671974ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=507&q=80)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Images;
