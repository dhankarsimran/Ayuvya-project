"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState(1); // 1 for middle initially

  return (
    <div className={styles.container}>
      <div
        className={`${styles.imageWrapper} ${styles.img1} ${
          activeImage === 0 ? styles.active : ""
        }`}
        onMouseEnter={() => setActiveImage(0)}
      >
        <Image src="/left-image.jpg" alt="Left" layout="fill" />
        <div className={styles.textOverlay}>STRENGTH</div>
      </div>
      <div
        className={`${styles.imageWrapper} ${
          activeImage === 1 ? styles.active : ""
        }`}
        onMouseEnter={() => setActiveImage(1)}
      >
        <Image src="/middle-image.jpg" alt="Middle" layout="fill" />
        <div className={styles.textOverlay}>MOBILITY</div>
      </div>
      <div
        className={`${styles.imageWrapper} ${styles.img2} ${
          activeImage === 2 ? styles.active : ""
        }`}
        onMouseEnter={() => setActiveImage(2)}
      >
        <Image src="/right-image.jpg" alt="Right" layout="fill" />
        <div className={styles.textOverlay}>DRILLS</div>
      </div>
    </div>
  );
}
