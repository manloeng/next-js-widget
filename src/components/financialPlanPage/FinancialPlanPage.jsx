import React, { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import PersonalFinance from "./widget/PersonalFinance";
import SpendLess from "./widget/SpendLess";
import styles from "../../../styles/FinancialPlanPage.module.css";

function FinancialPlanPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        <PersonalFinance></PersonalFinance>
        <SpendLess></SpendLess>
      </div>
    </>
  );
}

export default FinancialPlanPage;
