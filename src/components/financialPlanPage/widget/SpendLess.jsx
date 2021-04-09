import React, { useState } from "react";
import styles from "../../../../styles/FinancialPlanPage.module.css";

function SpendLess() {
  const [mortgage, setMortgage] = useState(0);
  const [bills, setBills] = useState(0);
  const [spendings, setSpendings] = useState(0);
  const [isHelpfulEnabled, setIsHelpfulEnabled] = useState(true);

  let total = 0;
  total = mortgage + bills + spendings;

  return (
    <div className={styles.widget}>
      <h1>Spend Less</h1>
      <p>Try reducing your monthly spending to see how your forecast could improve!</p>

      <div className={styles.slidecontainer}>
        <label>Mortgage</label>
        <input
          type="range"
          min="1"
          max="5000"
          value={mortgage}
          className={styles.slider}
          onChange={(e) => setMortgage(parseInt(e.target.value))}
        />
        <output>{mortgage}</output>
      </div>

      <div className={styles.slidecontainer}>
        <label>Bills</label>
        <input
          type="range"
          min="1"
          max="5000"
          value={bills}
          className={styles.slider}
          onChange={(e) => setBills(parseInt(e.target.value))}
        />
        <output>{bills}</output>
      </div>

      <div className={styles.slidecontainer}>
        <label>General Spending</label>
        <input
          type="range"
          min="1"
          max="5000"
          value={spendings}
          className={styles.slider}
          onChange={(e) => setSpendings(parseInt(e.target.value))}
        />
        <output>{spendings}</output>
      </div>

      <p>This means you are saving £{total} per month!</p>

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
