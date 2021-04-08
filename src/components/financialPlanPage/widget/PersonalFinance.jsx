import React, { useEffect, useState } from "react";
import MinorDataInputCompoent from "./MinorDataInputComponent";

import styles from "../../../../styles/FinancialPlanPage.module.css";

function PersonalFinance({ data = {}, handleUpdate }) {
  if (!Object.keys(data).length) return <></>;
  const { incomes, expenditures } = data;

  return (
    <div className={styles.widget}>
      <h1>Your Income And Spend</h1>

      <form>
        <div>
          <label>
            <b>Annual Income</b>
          </label>
        </div>

        {incomes.map((income) => {
          return (
            <MinorDataInputCompoent
              title={income.name}
              amount={income.amount ? income.amount : 0}
              fromAge={income.from_age ? income.from_age : 0}
              toAge={income.to_age ? income.to_age : 0}
              handleUpdate={handleUpdate}
            ></MinorDataInputCompoent>
          );
        })}

        <div>
          <label>
            <b>Monthly Spending</b>
          </label>
        </div>

        {expenditures.map((expense) => {
          return (
            <MinorDataInputCompoent
              title={expense.name}
              amount={expense.amount ? expense.amount : 0}
              fromAge={expense.from_age ? expense.from_age : 0}
              toAge={expense.to_age ? expense.to_age : 0}
              handleUpdate={handleUpdate}
            ></MinorDataInputCompoent>
          );
        })}
      </form>
    </div>
  );
}

export default PersonalFinance;
