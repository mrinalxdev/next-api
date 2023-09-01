import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Learn and Blog your{" "}
          <span className={styles.extraStyle}>learning</span>.
        </h1>
        <p className={styles.desc}>
          Learn while you share your learning to the other people. <br /> Happy
          DevLearning !
        </p>
        <Button title="Learn !" url="blog" /> 
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} />
      </div>
    </div>
  );
}
