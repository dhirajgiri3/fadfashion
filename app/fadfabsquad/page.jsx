"use client";

import React from "react";
import Timeline from "@/Component/FadFabSquad/Timeline";
import Header from "@/Component/Common/Header/Header";
import styled from "styled-components";
import FirstSection from "@/Component/FadFabSquad/FirstSection";
import SecondSection from "@/Component/FadFabSquad/SecondSection";
import Footer from "@/Component/Common/Footer/Footer";
import ThirdSection from "@/Component/FadFabSquad/ThirdSection";

const TimelineContainer = styled.div`
  /* padding-top: 10rem; */
  cursor: auto;
  background: #101010;

  /* @media screen and (max-width: 1000px) {
    padding-top: 13rem;
  }
  @media screen and (max-width: 768px) {
    padding-top: 15rem;
  } */
`;

function page() {
  return (
    <div>
      <Header />
      <TimelineContainer>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Timeline />
      </TimelineContainer>
      <Footer />
    </div>
  );
}

export default page;
