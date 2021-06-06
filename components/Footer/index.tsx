import styles from "../../styles/Home.module.css";

import { HomeIcon, HistoryIcon, SettingIcon } from "../../icons/navigation";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer + " mobile"}>
        <nav className={styles.footer__nav}>
          <div className={styles.footer__nav__items}>
            <Link href="/">
              <a className={styles.footer__nav__item}>
                <HomeIcon />
              </a>
            </Link>

            <Link href="/history">
              <a className={styles.footer__nav__item}>
                <HistoryIcon />
              </a>
            </Link>

            <Link href="/">
              <a className={styles.footer__nav__item}>
                <SettingIcon />
              </a>
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
