import Image from "next/image";
import { useRouter } from "next/router";
import { works } from "../types/data";
import styles from "./Works.module.scss";

type Props = {};

export const Works = (props: Props) => {
  const router = useRouter();
  
  return (
    <div className={styles.Works}>
      <h1>開発物</h1>
      <div className={styles.GridWorks}>
        {works.map((w, i) => (
          <div
            className={styles.WorkContainer}
            key={i}
            onClick={() => router.push(w.imageLink)}
          >
            <div className={styles.ImageWrapper}>
              <Image
                src={`/${w.imageName}.png`}
                width={1200}
                height={630}
                alt={w.title}
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h2>{w.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
