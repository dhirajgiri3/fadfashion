"use client";

import React from "react";
import Image from "next/image";
import logo from "@/Assets/Images/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import style from "./(css)/Header.module.css";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 1, y: "-20vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
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
        <Link className={style.a} href="/">
          Who We Are?
        </Link>
        <Link className={style.a} href="/">
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
}

export default Header;
