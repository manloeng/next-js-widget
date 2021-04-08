import React from "react";
import NavBar from "../navbar/NavBar";
import PersonalFinance from "./widget/PersonalFinance";
import styles from "../../../styles/FinancialPlanPage.module.css";

function FinancialPlanPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        <PersonalFinance></PersonalFinance>
        <PersonalFinance></PersonalFinance>
      </div>
    </>
  );
}

export default FinancialPlanPage;
