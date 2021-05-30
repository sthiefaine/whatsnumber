import styles from "../styles/Home.module.css";

import Form from "../components/Form";

import { PhoneValue } from "../hooks/phoneValue";

import { HomeIcon, HistoryIcon, SettingIcon } from "../icons/navigation";
const Home = () => {
  console.log("render HOME");
  PhoneValue();

  return (
    <>
      <>
        <div className={styles.aside + " desktop"}>
          <nav className={styles.aside__nav}>
            <ul className={styles.aside__nav__items}>
              <li className={styles.aside__nav__item}>Home</li>
              <li className={styles.aside__nav__item}>Home 2</li>
            </ul>
          </nav>
        </div>

        <div className={styles.container}>
          <header className={styles.header + " mobile"}>
            <div className={styles.logo}>L</div>

            <button>S</button>
            <button>T</button>
          </header>

          <main className={styles.main}>
            <article className={styles.main__article}>
              <Form />
            </article>
          </main>

          <footer className={styles.footer + " mobile"}>
            <nav className={styles.footer__nav}>
              <ul className={styles.footer__nav__items}>
                <li className={styles.footer__nav__item}>
                  <a className={styles.footer__nav__item__a} href="#home">
                    <HomeIcon />
                  </a>
                </li>
                <li className={styles.footer__nav__item}>
                  <a className={styles.footer__nav__item__a} href="#history">
                    <HistoryIcon />
                  </a>
                </li>
                <li className={styles.footer__nav__item}>
                  <a className={styles.footer__nav__item__a} href="#setting">
                    <SettingIcon />
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </>
    </>
  );
};
export default Home;
