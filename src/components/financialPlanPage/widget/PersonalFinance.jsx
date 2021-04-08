import React, { useEffect, useState } from "react";
import example from "../../../../exmaple.json";
import styles from "../../../../styles/FinancialPlanPage.module.css";

function PersonalFinance() {
  const [data, setData] = useState({});

  useEffect(() => {
    const cache = localStorage.getItem("data");
    if (!cache) {
      setData(example);
    } else {
      setData(cache);
    }
  }, []);

  const handleUpdate = (e) => {};

  return (
    <div className={styles.widget}>
      <h1>Your Income And Spend</h1>

      <form>
        <div>
          <label>
            <b>Annual Income</b>
          </label>
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
          <label>
            <b>Monthly Spending</b>
          </label>
        </div>

        <div>
          {/* could seperate these into mini components */}
          <label>Mortgage:</label>
          <input
            type="text"
            id="mortgage"
            name="mortgage"
            placeholder="Enter your monthly mortgage payment..."
            required
          />
          <label>From Age:</label>
          <input type="text" id="mortgageFromAge" name="mortgageFromAge" placeholder="Enter age..." required />
          <label>To Age:</label>
          <input type="text" id="mortgageToAge" name="mortgageToAge" placeholder="Enter age..." required />

          <br />
          <label>Bills:</label>
          <input type="text" id="bills" name="bills" placeholder="Enter your monthly bills..." required />
          <label>From Age:</label>
          <input type="text" id="billsFromAge" name="billsFromAge" placeholder="Enter age..." required />
          <label>To Age:</label>
          <input type="text" id="billsToAge" name="billsToAge" placeholder="Enter age..." required />

          <br />
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
