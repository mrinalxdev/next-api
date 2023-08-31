import React from "react";
import styles from "./footer.module.css";
import { socialCredentials } from "@/constants/constant";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2024 DevBlog , Built by Mrinal Pramanick</div>
      <div className={styles.imgContainer}>
        {socialCredentials.map((socialCredential) => (
          <Link key={socialCredential.id} href={socialCredential.url}>
            <Image
              width={socialCredential.width}
              src={socialCredential.src}
              height={socialCredential.height}
              className={styles.social}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
