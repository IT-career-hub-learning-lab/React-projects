import styles from "./style.module.css";
import location from "../../../assets/icons/location.svg";
import searchIcon from "../../../assets/icons/searchIcon.svg";
function SearchBar() {
  return (
    <form className={styles.searchBox}>
      <div className={styles.locationInput}>
        <img src={searchIcon} alt="" />
        <input name="location" placeholder="Должность или компания"></input>
      </div>
      <div className={styles.searchInput}>
        <img src={location} alt="" />
        <input name="query" placeholder="Город, Страна"></input>
      </div>
      <button className={styles.searchBtn}>Поиск</button>
    </form>
  );
}
export default SearchBar;
