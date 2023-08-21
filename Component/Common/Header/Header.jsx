"use client";

import React from "react";
import Image from "next/image";
import logo from "@/Assets/Images/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import style from "./(css)/Header.module.css";
import WideButton from "@/Component/Animation/Buttons/WideButton";

function Header() {
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
          <Link href="/">
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
      </div>
    </motion.div>
  );
}

export default Header;
