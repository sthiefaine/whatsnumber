import styles from "../../styles/History.module.css";

const SearchBar = () => {
  return (
    <>
      <div className={styles.searchBar}>
        <input
          className="toto"
          type="search"
          id="history-search"
          name="history"
          placeholder="Rechercher le numéro..."
          aria-label="Search through history content"
          size={70}
        />

        <button>Cancel</button>
      </div>
    </>
  );
};

export default SearchBar;
