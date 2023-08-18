"use client";

import React from "react";
import styled from "styled-components";
import First from "@/Component/Works/First";
import TierSystem from "@/Component/Works/TierSystem";
import BattleWars from "@/Component/Works/Battlewars";
import Footer from "@/Component/Common/Footer/Footer";
import Influencer from "@/Component/Works/Influencer";

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: linear-gradient(#101010, #151515);
  padding: 0 10rem;
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10rem;

  @media screen and (max-width: 1000px) {
    padding: 0 5rem;
    padding-top: 15vh;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 19vh;
    text-align: center;
  }
`;

function page() {
  return (
    <div>
      <Container>
        <First />
        <TierSystem />
        <BattleWars />
        <Influencer />
        <Footer />
      </Container>
    </div>
  );
}

export default page;
