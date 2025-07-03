import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";
import styles from "./Loading.module.scss";
import { getImagePath } from "../../utils/getImagePath";

export const Loading: React.FC = () => {
  return (
    <div className={styles.Animation}>
      <div className={styles.Box} />
      <div className={styles.Loading}>
        <p className={styles.Text}>Loading...</p>
        <Image src={getImagePath("Icon.png")} height="50" width="50" alt="icon" />
      </div>
    </div>
  );
};
