import { h, FunctionComponent } from "preact";
import styles from "./index.module.css";

type Props = {
  color: "blue" | "yellow";
  src: string;
  href: string;
  name: string;
};

export const LinkIcon: FunctionComponent<Props> = ({
  color,
  src,
  href,
  name,
}) => {
  return (
    <a
      className={`${styles["link-icon"]} ${
        color === "yellow" ? styles["yellow-outline"] : styles["blue-outline"]
      }`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img src={src} alt={`${name} icon`} />
    </a>
  );
};
