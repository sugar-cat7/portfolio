import { ReactElement } from "react";
import { Layout } from "../components";
import type { NextPageWithLayout } from "./_app";
import styles from "../components/Profile.module.scss";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineFileText,
} from "react-icons/ai";
import { getImagePath } from "../utils/getImagePath";

const Page: NextPageWithLayout = () => {
  return (
    <div className={styles.Profile}>
      <div className={styles.Hero}>
        <Image
          src={getImagePath("myicon.png")}
          width={120}
          height={120}
          alt="Sugar Cat"
          className={styles.Avatar}
        />
        <h1>Sugar Cat</h1>
        <p className={styles.Title}>SWE / SRE</p>
        
        <div className={styles.Social}>
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
      </div>
      
      <div className={styles.Description}>
        <p>何でも屋さんです。</p>
      </div>
      
      <div className={styles.Navigation}>
        <Link href="/about" className={styles.NavLink}>
          プロフィール詳細 →
        </Link>
        <Link href="/blog" className={styles.NavLink}>
          登壇・記事 →
        </Link>
        <Link href="/other" className={styles.NavLink}>
          開発物 →
        </Link>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
