import styles from "./ResultsOverview.module.css";

const ResultsOverview = () => {
  return (
    <section className={styles.resultsWrapper}>
      <h1 className={styles.resultsTitle}>Your Result</h1>
      <div className={styles.resultsScore}>
        <p className={styles.score}>
          76<span className={styles.scoreTotal}>of 100</span>
        </p>
      </div>
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.scoreLabel}>Great</h2>
        <p className={styles.description}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
};

export default ResultsOverview;
