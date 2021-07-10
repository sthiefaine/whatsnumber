import styles from "../../styles/Home.module.css";

import { HomeIcon, HistoryIcon, SettingIcon } from "../../icons/navigation";
import Link from "next/link";

const Aside = () => {
  return (
    <>
      <div className={styles.aside + " desktop"}>
        <nav className={styles.aside__nav}>
          <ul className={styles.aside__nav__items}>
            <li className={styles.aside__nav__item}>
              <Link href="/">
                <a className="">
                  <HomeIcon /> <span>Home</span>
                </a>
              </Link>
            </li>
            <li className={styles.aside__nav__item}>
              <Link href="/history">
                <a className="">
                  <HistoryIcon /> <span>History</span>
                </a>
              </Link>
            </li>
            <li className={styles.aside__nav__item}>
              <Link href="/">
                <a className="">
                  <SettingIcon />
                  <span>Settings</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Aside;
