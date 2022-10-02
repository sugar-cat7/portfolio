import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";
import styles from "./Loading.module.scss";

export const Loading: React.FC = () => {
  return (
    <div className={styles.Animation}>
      <div className={styles.Box} />
      <div className={styles.Loading}>
        <p className={styles.Text}>Loading...</p>
        <Image src={"/portfolio/Icon.png"} height="50" width="50" alt="icon" />
      </div>
    </div>
  );
};
