import React, { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import PersonalFinance from "./widget/PersonalFinance";
import styles from "../../../styles/FinancialPlanPage.module.css";
import example from "../../../exmaple.json";

function FinancialPlanPage() {
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
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        <PersonalFinance data={data} handleUpdate={handleUpdate}></PersonalFinance>
        <PersonalFinance></PersonalFinance>
      </div>
    </>
  );
}

export default FinancialPlanPage;
