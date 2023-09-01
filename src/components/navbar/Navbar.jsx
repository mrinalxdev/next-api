"use client";

import Link from "next/link";
import React from "react";
import { links } from "@/constants/constant";
import styles from "./navbar.module.css";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>DevLearn</Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <Button title="Logout" url="www.google.com"/>
      </div>
    </div>
  );
};

export default Navbar;
