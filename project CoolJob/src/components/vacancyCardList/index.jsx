import VacancyCard from "../../components/vacancyCard/index";
import styles from "./style.module.css";
import location from "../../../assets/icons/location.svg";
import facebook from "../../../assets/icons/facebook.svg";
import sony from "../../../assets/icons/sony.svg";
import cocaCola from "../../../assets/icons/cocaCola.svg";

const vacancyCards = [
  {
    id: 1,
    area: "Финансы",
    badgeColor: "#5182FF",
    title: "Менеджер по управлению финансами в крупной компании",
    location: "Коясан, Япония",
    locationIcon: location,
    companyLogo: sony,
    companyNameTime: "Sony, 3 дня назад",
  },

  {
    id: 2,
    area: "Продажи",
    badgeColor: "#FF51EE",
    title: "Специалист по продажам",
    location: "Осака, Япония",
    locationIcon: location,
    companyLogo: facebook,
    companyNameTime: "Facebook, 7 дней назад",
  },

  {
    id: 3,
    area: "Служба поддержки",
    badgeColor: "#58D94D",
    title: "Оператор колл центра",
    location: "Томаму, Япония",
    locationIcon: location,
    companyLogo: cocaCola,
    companyNameTime: "CocaCola, 1 день назад",
  },

  {
    id: 4,
    area: "Мультимедиа",
    badgeColor: "#FF9051",
    title: "Системный администратор",
    location: "Токио, Япония",
    locationIcon: location,
    companyLogo: sony,
    companyNameTime: "Sony, 3 дня назад",
  },

  {
    id: 5,
    area: "Дизайн",
    badgeColor: "#F84242",
    title: "Дизайнер интерьера в профессиональную студию в центре города",
    location: "Йокогама, Япония",
    locationIcon: location,
    companyLogo: facebook,
    companyNameTime: "Facebook, 7 дней назад",
  },

  {
    id: 6,
    area: "Грузоперевозки",
    badgeColor: "#383838",
    title: "Водитель на дальние дистанции",
    location: "Кобе, Япония",
    locationIcon: location,
    companyLogo: cocaCola,
    companyNameTime: "CocaCola, 1 день назад",
  },
];
function VacancyCardList() {
  return (
    <section className={styles.vacancyCards}>
      <div className="container">
        <div className={styles.subContainer}>
          <h3>Новые вакансии</h3>
          <span>Найди работу своей мечты прямо сейчас</span>
          <div className={styles.cards}>
            {vacancyCards.map(
              ({
                id,
                area,
                badgeColor,
                title,
                location: jobLocation,
                locationIcon,
                companyLogo,
                companyNameTime,
              }) => {
                return (
                  <VacancyCard
                    key={id}
                    area={area}
                    badgeColor={badgeColor}
                    title={title}
                    location={jobLocation}
                    locationIcon={locationIcon}
                    companyLogo={companyLogo}
                    companyNameTime={companyNameTime}
                  />
                );
              },
            )}
          </div>
          <button>Все вакансии</button>
        </div>
      </div>
    </section>
  );
}
export default VacancyCardList;
