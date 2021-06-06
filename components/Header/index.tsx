import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header + " mobile"}>
        <div className={styles.logo}>L</div>

        <button>S</button>
        <button>T</button>
      </header>
    </>
  );
};

export default Header;
