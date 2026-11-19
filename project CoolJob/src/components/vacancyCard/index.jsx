import styles from "./style.module.css";
function VacancyCard({
  area,
  badgeColor,
  title,
  location: jobLocation,
  locationIcon,
  companyLogo,
  companyNameTime,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.subTitle}>
        <span
          className={styles.badge}
          style={{ backgroundColor: badgeColor }}
        />
        <span>{area}</span>
      </div>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      <div className={styles.location}>
        <img src={locationIcon} alt="" />
        <span>{jobLocation}</span>
      </div>
      <div className={styles.company}>
        <img src={companyLogo} alt="" />
        <span>{companyNameTime}</span>
      </div>
    </div>
  );
}
export default VacancyCard;
