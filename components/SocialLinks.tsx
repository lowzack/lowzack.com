import { AllHTMLAttributes, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";
import styles from "./SocialLinks.module.scss";

const SocialLinks: FC<AllHTMLAttributes<HTMLUListElement>> = ({
  className,
  ..._props
}) => {
  return (
    <ul className={clsx(className, styles.list)}>
      <li>
        <a
          href="https://www.linkedin.com/in/lowzack/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/lowzack"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
