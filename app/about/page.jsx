"use client";

import Loader1 from "@/Component/Common/Loaders/Loader1";
import React, { useState, useEffect } from "react";

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [loading]);

  return (
    <div>
      {loading ? (
        <Loader1 />
      ) : (
        <>
          <div className="about">About</div>
        </>
      )}
    </div>
  );
}

export default Page;
