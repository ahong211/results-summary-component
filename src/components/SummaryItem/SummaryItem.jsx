import styles from "./SummaryItem.module.css";

const SummaryItem = ({ category, score, icon }) => {
  const categoryClass = category.toLowerCase();

  return (
    <div className={`${styles.summaryItemWrapper} ${styles[categoryClass]}`}>
      <div className={styles.itemGroupContainer}>
        <img src={icon} alt="" />
        <p className={`${styles.label} ${styles.categoryLabel}`}>{category}</p>
      </div>

      <p className={styles.pointsLabel}>
        {score} <span className={styles.totalPointsLabel}>/ 100</span>
      </p>
    </div>
  );
};

export default SummaryItem;
