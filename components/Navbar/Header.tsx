import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
type Props = {};

export const Header = (props: Props) => {
  return (
    <div className={styles.LayoutHeader}>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/other">Other</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
