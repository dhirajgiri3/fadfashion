"use client";

import React, { useEffect, useRef } from "react";
import Hero from "@/Component/Home/Hero/Hero";
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

const PageContainer = styled.div`
  cursor: auto;
  overflow-x: hidden;
  background: #101010;
  transition: background-color 0.5s ease; /* Add smooth transition effect */
`;

function Page() {
  const pageContainers = useRef(null);
  const [sliderSectionRef, sliderSectionInView] = useInView({ threshold: 0.5 });
  const [formSectionRef, formSectionInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (sliderSectionInView) {
      // The slider section is in view, change the background color of the container smoothly
      gsap.to(pageContainers.current, {
        backgroundColor: "#612683",
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      // The slider section is not in view, reset the background color smoothly
      gsap.to(pageContainers.current, {
        backgroundColor: "#101010",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [sliderSectionInView]);


  useEffect(() => {
    if (formSectionInView) {
      // The slider section is in view, change the background color of the container smoothly
      gsap.to(pageContainers.current, {
        backgroundColor: "#fff",
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      // The slider section is not in view, reset the background color smoothly
      gsap.to(pageContainers.current, {
        backgroundColor: "#101010",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [formSectionInView]);

  return (
    <PageContainer ref={pageContainers}>
      <div className="section hero">
        <Hero />
      </div>
      <div className="section video1">
        <Video1 />
      </div>
      <div className="section imageGrid" ref={sliderSectionRef}>
        <ImageGrid />
      </div>
      <div className="section slider" >
        <Slider />
      </div>
      <div className="section vidparagraph">
        <VidPara />
      </div>
      <div className="section form" ref={formSectionRef}>
        <Form />
      </div>
      <div className="section footer">
        <Footer />
      </div>
    </PageContainer>
  );
}

export default Page;
