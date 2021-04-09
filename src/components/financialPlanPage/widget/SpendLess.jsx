import React, { useState } from "react";
import styles from "../../../../styles/FinancialPlanPage.module.css";

function SpendLess() {
  const [amount, setAmount] = useState(0);
  const [isHelpfulEnabled, setIsHelpfulEnabled] = useState(true);

  return (
    <div className={styles.widget}>
      <h1>Spend Less</h1>
      <p>Try reducing your monthly spending to see how your forecast could improve!</p>

      <div className={styles.slidecontainer}>
        <label>Test</label>
        <input type="range" min="1" max="100" value="50" className={styles.slider} />
      </div>

      <div className={styles.slidecontainer}>
        <input type="range" min="1" max="100" value="50" className={styles.slider} />
      </div>

      <div className={styles.slidecontainer}>
        <input type="range" min="1" max="100" value="50" className={styles.slider} />
      </div>

      <p>This means you are saving £{amount} per month!</p>

      <button className={styles.button}>Find Ways To Save</button>

      {isHelpfulEnabled && (
        <div className={styles.isHelpful}>
          <a href="#" onClick={() => setIsHelpfulEnabled(false)}>
            Was This Helpful?
          </a>
          <a onClick={() => setIsHelpfulEnabled(false)}>👍</a>
          <a onClick={() => setIsHelpfulEnabled(false)}>👎</a>
        </div>
      )}
    </div>
  );
}

export default SpendLess;
