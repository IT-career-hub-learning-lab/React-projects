import SearchBar from "../searchBar/index";
import styles from "./style.module.css";
function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.subContainer}>
          <div className={styles.textBox}>
            <h1>Один клик и работа в кармане</h1>
          </div>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
export default Hero;
