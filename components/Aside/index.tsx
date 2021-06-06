import styles from "../../styles/Home.module.css";

const Aside = () => {
  return (
    <>
      <div className={styles.aside + " desktop"}>
        <nav className={styles.aside__nav}>
          <ul className={styles.aside__nav__items}>
            <li className={styles.aside__nav__item}>Home</li>
            <li className={styles.aside__nav__item}>Home 2</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Aside;
