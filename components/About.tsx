import React from "react";
import styles from "./About.module.scss";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineFileText,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import {
  about,
  awards,
  careerSociety,
  careerStudents,
  certification,
  skill,
} from "../types/data";

export const About: React.FC = () => {
  return (
    <div className={styles.About}>
      <div className={styles.IconBox}>
        <h1>Sugar</h1>
        <Image src={"/portfolio/myicon.png"} width={50} height={50} />
      </div>
      <div className={styles.IconBox}>
        <h2>Software Engineer</h2>
        <Link href="https://github.com/sugar-cat7">
          <AiFillGithub size="2em" className={styles.Link} />
        </Link>
        <Link href="https://twitter.com/sugar235711">
          <AiFillTwitterCircle size="2em" className={styles.Link} />
        </Link>
        <Link href="https://scrapbox.io/sugar-dev/">
          <AiOutlineFileText size="2em" className={styles.Link} />
        </Link>
      </div>
      <h3>About</h3>
      <ul>
        {about.map((a, i) => (
          <li key={i}>{a.text}</li>
        ))}
      </ul>
      <h3>Skill/Years Of Experience</h3>
      <ul>
        {skill.map((s, i) => (
          <li key={i}>{s.name}</li>
        ))}
      </ul>
      <h3>Career / Length Of Service</h3>
      <div className={styles.Career}>
        <h4>学生アルバイト</h4>
        <ul className={styles.Student}>
          {careerStudents.map((c, i) => (
            <>
              <li key={i}>
                {c.name} / {c.season}
              </li>
              {c?.link ? (
                <li key={i} className={styles.Explanation}>
                  <a href={c.link} className={styles.Link}>
                    {c.text}
                  </a>
                </li>
              ) : (
                <li key={i} className={styles.Explanation}>
                  {c.text}
                </li>
              )}
            </>
          ))}
        </ul>
        <h4>社会人</h4>
        <ul>
          {careerSociety.map((c, i) => (
            <>
              <li key={i}>
                {c.name} / {c.season}
              </li>
              <li key={i} className={styles.Explanation}>
                {c.text}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
