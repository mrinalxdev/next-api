import React from "react";
import styles from "./footer.module.css";
import { socialCredentials } from "@/constants/constant";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>DevLearn , Built by {" "}
        <Link href="https://mrinal-portfolio.vercel.app">
          @Mrinal Pramanick
        </Link>
      </div>
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
