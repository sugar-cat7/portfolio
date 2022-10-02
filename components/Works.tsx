import Image from "next/image";
import Link from "next/link";
import { certification, other, works } from "../types/data";
import styles from "./Works.module.scss";

type Props = {};

export const Works = (props: Props) => {
  return (
    <div className={styles.Works}>
      <h1>その他</h1>
      <h3>略歴</h3>
      {other.map((o, i) => (
        <ul key={i} className={styles.UlUnset}>
          <h4>{o.year}</h4>
          {o.content.map((c, i) => (
            <li key={i}>
              {c?.link ? (
                <a href={c.link} className={styles.Link}>
                  {c.name}
                </a>
              ) : (
                <>{c.name}</>
              )}
            </li>
          ))}
        </ul>
      ))}
      <h3 className={styles.Spacer}>保有資格</h3>
      <ul>
        {certification.map((c, i) => (
          <li key={i}>{c.name}</li>
        ))}
      </ul>
      <h1 className={styles.Title}>開発物</h1>
      <div className={styles.GridWorks}>
        {works.map((w, i) => (
          <div className={styles.WorkContainer} key={i}>
            <Image
              src={`/portfolio/${w.imageName}.png`}
              width="450"
              height="300"
              alt="work"
              objectFit="cover"
            />
            <h2>{w.title}</h2>
            <p>{w.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
