import { h, Fragment } from "preact";
import { Introduction } from "./components/Introduction";
import { Links } from "./components/Links";
import styles from "./app.module.css";

export function App() {
  return (
    <div className={styles.content}>
      <Introduction />
      <Links />
    </div>
  );
}
