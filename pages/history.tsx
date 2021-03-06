import { format } from "date-fns";

import styles from "../styles/History.module.css";

import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";

import SearchBar from "../components/SearchBar";
import Image from "next/image";

import {
  ShareIcon,
  AddIcon,
  AddContactIcon,
  TrashIcon,
  Edit2Icon,
} from "../icons/options";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import React from "react";
import ListHistory from "../components/Lists/history";

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
            {historyNumbers.length === 0 && (
              <>
                <div className={styles.button__container}>Historique vide.</div>
                <Image
                  className={styles.img__empty}
                  src={`/image/Empty-amico.svg`}
                  width="150px"
                  height="150px"
                  alt="Empty svg"
                />
              </>
            )}
            {historyNumbers.length > 0 && (
              <>
                <SearchBar />
                <article className={styles.main__article}>
                  <ListHistory />
                </article>
              </>
            )}
          </main>
          <Footer />
        </div>
      </>
    </>
  );
};
export default History;
