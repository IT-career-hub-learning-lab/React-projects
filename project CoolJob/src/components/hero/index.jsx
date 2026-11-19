import SearchBar from "../searchBar/index";
import styles from "./style.module.css";
function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.subContainer}>
          <div className={styles.textBox}>
            <h1>
              <span>Один клик</span> <span>и работа в кармане</span>
            </h1>
          </div>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
export default Hero;
