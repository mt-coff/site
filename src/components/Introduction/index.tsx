import { h, FunctionComponent } from "preact";
import styles from "./index.module.css";

export const Introduction: FunctionComponent = () => {
  return (
    <section className={styles.introduction}>
      <img src="/src/assets/img/mt_coff.jpg" />
      <h1>mt_coff</h1>
    </section>
  );
};
