"use client";

import React from "react";
import Timeline from "@/Component/FadFabSquad/Timeline";
import Header from "@/Component/Common/Header/Header";
import styled from "styled-components";
import FirstSection from "@/Component/FadFabSquad/FirstSection";

const TimelineContainer = styled.div`
  padding-top: 10rem;
  cursor: auto;
  background: #101010;

  @media screen and (max-width: 1000px) {
    padding-top: 13rem;
  }
  @media screen and (max-width: 768px) {
    padding-top: 15rem;
  }
`;

function page() {
  return (
    <>
      <Header />
      <TimelineContainer>
        <FirstSection/>
        <Timeline />
      </TimelineContainer>
    </>
  );
}

export default page;
