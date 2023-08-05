"use client";

import Loader1 from "@/Component/Common/Loaders/Loader1";
import Popup from "@/Component/Home/Popup/Popup";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Video1Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

function Video1() {
  return (
    <Video1Container>
      <Popup />
      <Loader1 />
    </Video1Container>
  );
}

export default Video1;
