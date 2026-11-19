import styles from "./style.module.css";
import facebook from "../../../assets/icons/facebook.svg";
import disney from "../../../assets/icons/disney.svg";
import microsoft from "../../../assets/icons/microsoft.svg";
import sony from "../../../assets/icons/sony.svg";
import cocaCola from "../../../assets/icons/cocaCola.svg";

function BrandList() {
  return (
    <section className={styles.brandList}>
      <div className="container">
        <div className={styles.subContainer}>
          <span className={styles.text}>Помогаем найти работу:</span>
          <div className={styles.brands}>
            <img src={disney} alt="" />
            <img src={facebook} alt="" />
            <img src={microsoft} alt="" />
            <img src={sony} alt="" />
            <img src={cocaCola} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default BrandList;
