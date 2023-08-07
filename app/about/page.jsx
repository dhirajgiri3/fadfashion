"use client";

import First from "@/Component/About/First";
import Loader1 from "@/Component/Common/Loaders/Loader1";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../../app/globals.css";
import Second from "@/Component/About/Second";
import Footer from "@/Component/Common/Footer/Footer";
import Header2 from "@/Component/Common/Header/Header2";

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  const AboutConatiner = styled.div`
    background: #ffffff;
    color: #111;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 10rem;
    padding-top: 20vh;

    @media screen and (max-width: 1000px) {
      padding: 0 5rem;
      padding-top: 15vh;

    }
    @media screen and (max-width: 768px) {
      padding: 0 1rem;
      padding-top: 20vh;
    }

    .first-section {
      width: 100%;
    }
  `;

  return (
    <div>
      {loading ? (
        <Loader1 />
      ) : (
        <>
          <Header2 />
          <AboutConatiner className="about">
            <div className="first-section">
              <First />
            </div>
            <div className="second-section">
              <Second />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </AboutConatiner>
        </>
      )}
    </div>
  );
}

export default Page;
