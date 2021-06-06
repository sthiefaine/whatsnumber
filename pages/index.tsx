import styles from "../styles/Home.module.css";

import Form from "../components/Form";
import Aside from "../components/Aside";
import Header from "../components/Header";

import { PhoneValue } from "../hooks/phoneValue";
import Footer from "../components/Footer";

const Home = () => {
  console.log("render HOME");
  PhoneValue();

  return (
    <>
      <>
        <Aside />
        <div className={styles.container}>
          <Header />
          <main className={styles.main}>
            <article className={styles.main__article}>
              <Form />
            </article>
          </main>
          <Footer />
        </div>
      </>
    </>
  );
};
export default Home;
