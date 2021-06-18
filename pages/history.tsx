// import styles from "../styles/History.module.css";
import styles from "../styles/History.module.css";

import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";

import SearchBar from "../components/SearchBar";

import {
  ShareIcon,
  AddIcon,
  AddContactIcon,
  TrashIcon,
  Edit2Icon,
} from "../icons/options";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const History = () => {
  console.log("render History");

  const historyNumbers = useSelector(
    (state: RootState) => state.history.historyNumbers
  );

  return (
    <>
      <>
        <Aside />
        <div className={styles.container}>
          <Header />
          <main className={styles.main}>
            <SearchBar />
            <article className={styles.main__article}>
              <ul>
                {historyNumbers.map((element, i) => {
                  return (
                    <li key={element.id}>
                      <div>
                        <p>{element.number}</p>
                        <p>DATE</p>
                      </div>
                      <div>
                        <span>
                          <ShareIcon />
                        </span>
                        <span>
                          <Edit2Icon />
                        </span>
                        <span>
                          <TrashIcon />
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          </main>
          <Footer />
        </div>
      </>
    </>
  );
};
export default History;
