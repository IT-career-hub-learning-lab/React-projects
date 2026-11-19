import CategoryCard from "../../components/categoryCard/index";
import styles from "./style.module.css";
import arrow from "../../../assets/icons/arrow.svg";
import bin from "../../../assets/icons/bin.svg";
import cart from "../../../assets/icons/cart.svg";
import circle from "../../../assets/icons/circle.svg";
import clapper from "../../../assets/icons/clapper.svg";
import food from "../../../assets/icons/food.svg";
import grid from "../../../assets/icons/grid.svg";
import medicine from "../../../assets/icons/medicine.svg";
import transport from "../../../assets/icons/transport.svg";
import windowIcon from "../../../assets/icons/windowIcon.svg";

const categoryCards = [
  { id: 1, title: "Финансы", img: circle },
  { id: 2, title: "Грузоперевозки", img: transport },
  { id: 3, title: "Дизайн", img: grid },
  { id: 4, title: "Ресторанный бизнес", img: food },
  { id: 5, title: "Медицина", img: medicine },
  { id: 6, title: "Мультимедиа", img: clapper },
  { id: 7, title: "Служба поддержки", img: windowIcon },
  { id: 8, title: "Менеджмент", img: bin },
  { id: 9, title: "Продажи", img: cart },
  { id: 10, title: "Больше категорий", img: arrow },
];

function CategoryList() {
  return (
    <section className={styles.cardsList}>
      <div className="container">
        <div className={styles.subContainer}>
          <h2>Работа по категориям</h2>
          <div className={styles.categories}>
            {categoryCards.map((category) => {
              return (
                <CategoryCard
                  key={category.id}
                  title={category.title}
                  img={category.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default CategoryList;
