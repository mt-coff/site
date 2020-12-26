import { h, FunctionComponent } from "preact";
import styles from "./index.module.css";
import mtImg from "../../assets/img/mt_coff.jpg";

export const Introduction: FunctionComponent = () => {
  return (
    <section className={styles.introduction}>
      <img src={mtImg} alt="mt_coff main image" />
      <h1>mt_coff</h1>
    </section>
  );
};
