import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import about from "public/about.avif";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={about} fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Igniting Potential</h1>
          <h3 className={styles.imgDesc}>
            Handcrafted Articles to learn from and gain knowledge.
          </h3>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Our Mission</h1>
          <p className={styles.desc}>
            Welcome to DevLearn, your gateway to a vibrant community of learners
            and knowledge enthusiasts! At DevLearn, we believe in the power of
            continuous learning and the limitless possibilities it offers. Our
            platform is designed to empower individuals from all walks of life
            to embark on a journey of discovery, growth, and knowledge sharing.
            <br />
            <br />
            At the heart of DevLearn is a passionate commitment to democratize
            education and make learning accessible to everyone. Our mission is
            simple yet profound: to provide a platform where anyone, regardless
            of their background or expertise, can embark on a learning
            adventure, acquire new skills, and share their knowledge with the
            world.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Join Us on the Journey</h1>
          <p className={styles.desc}>
            Whether you're a seasoned professional looking to expand your
            skillset, a student eager to supplement your education, or simply
            someone with a thirst for knowledge, DevLearn is your home for
            learning and sharing. Join us today, and let's embark on this
            incredible journey together!
          </p>

          <Button title="Contact Us" url="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
