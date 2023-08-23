"use client";

import React from "react";
import Image from "next/image";
import logo from "@/Assets/Images/logo-dark.png";
import Link from "next/link";
import { motion } from "framer-motion";
import style from "./(css)/Header2.module.css";
import WideButton from "@/Component/Animation/Buttons/WideButton";

function Header2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 100,
        ease: "easeInOut",
        delay: 0.5,
      }}
      className={style.headercontainer}
    >
      <div className={style.left}>
        <div className={style.logo}>
          <Link href="/" className={style.logoa}>
            <Image className={style.logoimg} src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className={style.right}>
        <Link className={style.a} href="/">
          Home
        </Link>
        <Link className={style.a} href="/about">
          what is FAD?
        </Link>
        <Link className={style.a} href="/fadfabsquad">
          Fadfabsquad
        </Link>
        {/* <Link className={style.a} href="#form">
          <WideButton
            className={style.WideButtons}
            text="Join FAD"
            fontsize="1.5rem"
            color="#fff"
            hoverbg="#111"
            bg="#ff005c"
            hovercolor="#eee"
            bordercolor="#ff005c"
            mpaddingx="4rem"
            mpaddingy="1.2rem"
            mfontsize="1rem"
            title="Join Fad"
            height="4.5rem"
            width="12rem"
          />
        </Link> */}
      </div>
    </motion.div>
  );
}

export default Header2;
