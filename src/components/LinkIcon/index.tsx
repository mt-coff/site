import { h, FunctionComponent } from "preact";
import styles from "./index.module.css";

type Props = {
  color: "blue" | "yellow";
  src: string;
  href: string;
};

export const LinkIcon: FunctionComponent<Props> = ({ color, src, href }) => {
  return (
    <a
      className={`${styles["link-icon"]} ${
        color === "yellow" ? styles["yellow-outline"] : styles["blue-outline"]
      }`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img src={src} />
    </a>
  );
};
