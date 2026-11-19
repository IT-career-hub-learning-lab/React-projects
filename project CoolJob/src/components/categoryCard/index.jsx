import styles from "./style.module.css";

function CategoryCard({ title, img }) {
  return (
    <div className={styles.category}>
      <img src={img} alt="" />
      <span>{title}</span>
    </div>
  );
}
export default CategoryCard;
