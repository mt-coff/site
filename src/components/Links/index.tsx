import { h, FunctionComponent } from "preact";
import styles from "./index.module.css";
import { LinkIcon } from "../LinkIcon";

type SocialLink = {
  name: string;
  href: string;
  src: string;
};

const linkList: SocialLink[] = [
  {
    name: "github",
    href: "https://github.com/mt-coff",
    src: "/src/assets/img/github.png",
  },
  {
    name: "twitter",
    href: "https://github.com/mt-coff",
    src: "/src/assets/img/twitter.svg",
  },
  {
    name: "blog",
    href: "https://blog.mt-coff.me",
    src: "/src/assets/img/blog.svg"
  }
];

export const Links: FunctionComponent = () => {
  return (
    <section className={styles.links}>
      <h2>Links</h2>
      <div className={styles.icons}>
        {linkList.map((link, idx) => (
          <span className={styles.icon} key={link.name}>
            <LinkIcon
              color={idx % 2 === 0 ? "blue" : "yellow"}
              href={link.href}
              src={link.src}
            />
          </span>
        ))}
      </div>
    </section>
  );
};
