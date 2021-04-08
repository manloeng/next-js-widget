import React, { useState } from "react";
import styles from "../../../../styles/FinancialPlanPage.module.css";

function PersonalFinance() {
  return (
    <div className={styles.widget}>
      <h1>Your Income And Spend</h1>

      <form>
        <div>
          <label>Annual Income</label>
        </div>
        <div>
          <label>Annual Salary:</label>
          <input type="text" id="salary" name="salary" placeholder="Enter your annual salary..." required />
          <label>From Age:</label>
          <input type="text" id="fromAge" name="fromAge" placeholder="Enter age..." required />
          <label>To Age:</label>
          <input type="text" id="toAge" name="toAge" placeholder="Enter age..." required />
        </div>

        <div>
          <label>Monthly Spending</label>
        </div>

        <div>
          <label>Mortgage:</label>
          <input type="text" id="salary" name="salary" placeholder="Enter your annual salary..." required />
          <label>From Age:</label>
          <input type="text" id="fromAge" name="fromAge" placeholder="Enter age..." required />
          <label>To Age:</label>
          <input type="text" id="toAge" name="toAge" placeholder="Enter age..." required />

          <label>Bills:</label>
          <input type="text" id="salary" name="salary" placeholder="Enter your annual salary..." required />
          <label>From Age:</label>
          <input type="text" id="fromAge" name="fromAge" placeholder="Enter age..." required />
          <label>To Age:</label>
          <input type="text" id="toAge" name="toAge" placeholder="Enter age..." required />

          <label>General Spending:</label>
          <input type="text" id="salary" name="salary" placeholder="Enter your annual salary..." required />
          <label>From Age:</label>
          <input type="text" id="fromAge" name="fromAge" placeholder="Enter age..." required />
          <label>To Age:</label>
          <input type="text" id="toAge" name="toAge" placeholder="Enter age..." required />
        </div>
      </form>
    </div>
  );
}

export default PersonalFinance;
