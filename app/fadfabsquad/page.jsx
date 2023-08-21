"use client";

import React from "react";
import Timeline from "@/Component/FadFabSquad/Timeline";
import Header from "@/Component/Common/Header/Header";
import styled from "styled-components";
import FirstSection from "@/Component/FadFabSquad/FirstSection";
import SecondSection from "@/Component/FadFabSquad/SecondSection";
import Footer from "@/Component/Common/Footer/Footer";
import ThirdSection from "@/Component/FadFabSquad/ThirdSection";
import Form from "@/Component/FadFabSquad/Form/Form";
import Response from "@/Component/FadFabSquad/Form/Response";
import Form2 from "@/Component/FadFabSquad/Form/Form2";

const TimelineContainer = styled.div`
  cursor: auto;
  background: #101010;
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
        <Form />
        {/* <Form2 /> */}
      </TimelineContainer>
      <Footer />
    </div>
  );
}

export default page;
