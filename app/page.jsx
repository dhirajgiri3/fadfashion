"use client";

import React, { useEffect, useRef } from "react";
import Hero2 from "@/Component/Home/Hero/Hero2";
import ImageGrid from "@/Component/Home/ImageGrid/imageGrid";
import styled from "styled-components";
import Slider from "@/Component/Home/Slider/Sliders";
import Video1 from "@/Component/Home/Video/Video1";
import VidPara from "@/Component/Home/VideoParagraph/VidPara";
import Footer from "@/Component/Common/Footer/Footer";
import Form from "@/Component/Home/Form/Form";
import { gsap } from "gsap";

// Import necessary Intersection Observer libraries
import { useInView } from "react-intersection-observer";
import Popup from "@/Component/Home/Popup/Popup";
import Header from "@/Component/Common/Header/Header";

const PageContainer = styled.div`
  cursor: auto;
  overflow-x: hidden;
  background: #101010;
  transition: background-color 0.5s ease; /* Add smooth transition effect */
`;

function Page() {
  const pageContainers = useRef(null);
  const [sliderSectionRef, sliderSectionInView] = useInView({ threshold: 0.4 });
  const [formSectionRef, formSectionInView] = useInView({ threshold: 0.4 });
  const [videoSectionRef, videoSectionInView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (sliderSectionInView) {
      gsap.to(pageContainers.current, {
        backgroundColor: "#4E3636",
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(pageContainers.current, {
        backgroundColor: "#101010",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [sliderSectionInView]);

  useEffect(() => {
    if (formSectionInView) {
      // The slider section is in view, change the background color of the container smoothly
      gsap.to(pageContainers.current, {
        backgroundColor: "#fff",
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      // The slider section is not in view, reset the background color smoothly
      gsap.to(pageContainers.current, {
        backgroundColor: "#101010",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [formSectionInView]);

  useEffect(() => {
    if (videoSectionInView) {
      // The slider section is in view, change the background color of the container smoothly
      gsap.to(pageContainers.current, {
        backgroundColor: "#FEBBCC",
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      // The slider section is not in view, reset the background color smoothly
      gsap.to(pageContainers.current, {
        backgroundColor: "#101010",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [videoSectionInView]);

  return (
    <>
      <Header />
      <PageContainer ref={pageContainers}>
        <div className="section hero">
          <Hero2 />
        </div>
        <div className="section vidparagraph" ref={sliderSectionRef}>
          <VidPara />
        </div>
        <div className="section slider" id="slider">
          <Slider />
        </div>
        <div className="section video1" ref={videoSectionRef}>
          <Video1 />
        </div>
        <div className="section imageGrid" id="imagegrid">
          <ImageGrid />
        </div>

        <div className="section form" id="form" ref={formSectionRef}>
          <Form />
        </div>
        <div className="section footer" id="footer">
          <Footer />
        </div>
        <Popup />
      </PageContainer>
    </>
  );
}

export default Page;
