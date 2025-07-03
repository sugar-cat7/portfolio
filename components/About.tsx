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
  other,
} from "../types/data";

export const About: React.FC = () => {
  return (
    <div className={styles.About}>
      <h1>About</h1>
      
      <section className={styles.Section}>
        <div className={styles.BasicInfo}>
          {about.map((a, i) => (
            <div key={i} className={styles.InfoItem}>
              {a.text}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.Section}>
        <h3>Skills</h3>
        <div className={styles.SkillList}>
          {skill.map((s, i) => (
            <span key={i} className={styles.SkillTag}>
              {s.name}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.Section}>
        <h3>Career</h3>
        <div className={styles.Timeline}>
          {[...careerSociety, ...careerStudents]
            .sort((a, b) => {
              // 期間の開始年月を抽出して比較（新しい順）
              const getStartDate = (season: string) => {
                const match = season.match(/(\d{4})\/(\d{1,2})/);
                if (match) {
                  return new Date(parseInt(match[1]), parseInt(match[2]) - 1);
                }
                return new Date(0);
              };
              return getStartDate(b.season).getTime() - getStartDate(a.season).getTime();
            })
            .map((c, i) => (
              <div key={i} className={styles.TimelineItem}>
                <div className={styles.TimelineHeader}>
                  <span className={styles.Company}>{c.name}</span>
                  <span className={styles.Period}>{c.season}</span>
                </div>
                <div className={styles.TimelineContent}>
                  {c.text}
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className={styles.Section}>
        <h3>Biography</h3>
        <div className={styles.Biography}>
          {other.map((o, i) => (
            <div key={i} className={styles.YearSection}>
              <h4>{o.year}</h4>
              <div className={styles.EventList}>
                {o.content.map((c, j) => (
                  <div key={j} className={styles.Event}>
                    {c?.link ? (
                      <a href={c.link} className={styles.EventLink}>
                        <span className={styles.EventName}>{c.name}</span>
                        <span className={styles.EventIcon}>→</span>
                      </a>
                    ) : (
                      <span className={styles.EventName}>{c.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.Section}>
        <h3>Certifications</h3>
        <div className={styles.CertList}>
          {certification.map((c, i) => (
            <div key={i} className={styles.CertItem}>
              <span className={styles.CertIcon}>✓</span>
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
