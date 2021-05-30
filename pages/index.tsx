import styles from "../styles/Home.module.css";

import Form from "../components/Form";

import { PhoneValue } from "../hooks/phoneValue";
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
                  <a href="#home">Acc</a>
                </li>
                <li className={styles.footer__nav__item}>
                  <a href="#history">His</a>
                </li>
                <li className={styles.footer__nav__item}>
                  <a href="#setting">Para</a>
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
