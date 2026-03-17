import React from "react";
import reactionIcon from "../../assets/icon-reaction.svg";
import styles from "./SummaryItem.module.css";

const SummaryItem = () => {
  return (
    <div className={styles.summaryItemWrapper}>
      <div className={styles.itemGroupContainer}>
        <img src={reactionIcon} alt="red lightning bolt icon" />
        <p className={styles.categoryLabel}>Reaction</p>
      </div>

      <p className={styles.pointsLabel}>
        80 <span className={styles.totalPointsLabel}>/ 100</span>
      </p>
    </div>
  );
};

export default SummaryItem;
