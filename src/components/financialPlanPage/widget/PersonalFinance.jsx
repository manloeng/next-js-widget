import React, { useState, useEffect } from "react";
import MinorDataInputCompoent from "./MinorDataInputComponent";
import styles from "../../../../styles/FinancialPlanPage.module.css";
import example from "../../../../exmaple.json";

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

  const handleUpdate = (e, payload) => {
    const { name, value } = e.target;
    const { financeIndex, index } = payload;
    const copyData = { ...data };

    let finance = "expenditures";
    if (financeIndex === 0) finance = "incomes";

    copyData[finance][index][name] = value;
    setData(copyData);
  };

  const keys = Object.keys(data);
  if (!keys.length) return <></>;
  return (
    <div className={styles.widget}>
      <h1>Your Income And Spend</h1>

      <form>
        {keys.map((key, financeIndex) => {
          return (
            <>
              <>
                {financeIndex === 0 ? (
                  <label>
                    <b>Annual Income</b>
                  </label>
                ) : (
                  <label>
                    <b>Monthly Spending</b>
                  </label>
                )}
              </>

              {data[key].map((finance, index) => (
                <MinorDataInputCompoent
                  title={finance.name}
                  amount={finance.amount ? finance.amount : 0}
                  fromAge={finance.from_age ? finance.from_age : 0}
                  toAge={finance.to_age ? finance.to_age : 0}
                  index={index}
                  financeIndex={financeIndex}
                  handleUpdate={handleUpdate}
                ></MinorDataInputCompoent>
              ))}
            </>
          );
        })}
      </form>
    </div>
  );
}

export default PersonalFinance;
