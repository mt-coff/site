import { h, FunctionComponent } from "preact";
import styles from "./index.module.css";
import { LinkIcon } from "../LinkIcon";
import githubIcon from "../../assets/img/github.png";
import twitterIcon from "../../assets/img/twitter.svg";
import blogIcon from "../../assets/img/blog.svg";

type SocialLink = {
  name: string;
  href: string;
  src: string;
};

const linkList: SocialLink[] = [
  {
    name: "github",
    href: "https://github.com/mt-coff",
    src: githubIcon,
  },
  {
    name: "twitter",
    href: "https://twitter.com/mt_coff",
    src: twitterIcon,
  },
  {
    name: "blog",
    href: "https://blog.mt-coff.me",
    src: blogIcon,
  },
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
              name={link.name}
            />
          </span>
        ))}
      </div>
    </section>
  );
};
