import Head from "next/head";
import FinancialPlanPage from "../src/components/financialPlanPage/FinancialPlanPage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Finance Widget</title>
      </Head>

      <FinancialPlanPage></FinancialPlanPage>
    </div>
  );
}
