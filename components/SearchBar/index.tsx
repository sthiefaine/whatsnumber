import styles from "../../styles/History.module.css";

const SearchBar = () => {
  return (
    <>
      <div className={styles.searchBar}>
        <input
          className={styles.searchBarInput}
          type="search"
          id="history-search"
          name="history"
          placeholder="Rechercher le numéro..."
          aria-label="Search through history content"
        />
      </div>
    </>
  );
};

export default SearchBar;
