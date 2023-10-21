import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { articles, certification, other, works } from "../types/data";
import styles from "./Works.module.scss";

type Props = {};

export const Works = (props: Props) => {
  const router = useRouter();
  return (
    <div className={styles.Works}>
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
      <h3 className={styles.Spacer}>登壇/記事</h3>
      <div className={styles.GridWorks}>
        {articles.map((w, i) => (
          <div
            className={styles.WorkContainer}
            key={i}
            onClick={() => router.push(w.imageLink)}
          >
            <Image
              src={`/portfolio/${w.imageName}.png`}
              width="450"
              height="300"
              alt="work"
              layout="responsive"
              objectFit="cover"
            />
            <h2>{w.title}</h2>
            <p>{w.skill}</p>
          </div>
        ))}
      </div>
      <h3 className={styles.Spacer}>開発物</h3>
      <div className={styles.GridWorks}>
        {works.map((w, i) => (
          <div
            className={styles.WorkContainer}
            key={i}
            onClick={() => router.push(w.imageLink)}
          >
            <Image
              src={`/portfolio/${w.imageName}.png`}
              width="450"
              height="300"
              alt="work"
              layout="responsive"
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
