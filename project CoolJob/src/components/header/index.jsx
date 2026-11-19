import CooljobLogo from "../../../assets/icons/cooljob.svg";
import styles from "./style.module.css";
function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.subContainer}>
          <div className={styles.imgBox}>
            <img src={CooljobLogo} alt="Cooljob logo"></img>
          </div>
          <div className={styles.linkBox}>
            <a>Поиск работы</a>
            <a>Поиск стартапов</a>
          </div>
          <div className={styles.buttonBox}>
            <button className={styles.btnReg}>Регистрация</button>
            <button>Вход</button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
