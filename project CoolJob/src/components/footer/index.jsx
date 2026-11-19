import styles from "./style.module.css";
import cooljob from "../../../assets/icons/cooljob.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import google from "../../../assets/icons/google.svg";
import twitter from "../../../assets/icons/twitter.svg";
import facebook2 from "../../../assets/icons/facebook2.svg";

const cities = [
  "Осака",
  "Коясан",
  "Токио",
  "Хаконэ",
  "Наэба",
  "Томаму",
  "Йокогама",
  "Нагоя",
  "Саппоро",
  "Кобе",
];

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.subContainer}>
          <h5>Популярные города</h5>
          <ul>
            {cities.map((city, index) => {
              return <li key={index}>{city}</li>;
            })}
          </ul>
          <div className={styles.iconsBox}>
            <img src={cooljob} alt="" />
            <div className={styles.socialIcons}>
              <img src={linkedin} alt="" />
              <img src={google} alt="" />
              <img src={twitter} alt="" />
              <img src={facebook2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
