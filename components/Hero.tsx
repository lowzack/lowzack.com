import { AllHTMLAttributes, FC } from "react";
import clsx from "clsx";
import styles from "./Hero.module.scss";
import Section from "./Section";
import Image from "next/image";

const Hero: FC<AllHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.hero, className)}>
      <Image
        src="/static/banner.webp"
        fill
        alt="background image"
        style={{ objectFit: "cover", objectPosition: "bottom" }}
        className={clsx(styles.heroImage)}
      />
      <Section {...props}>{children}</Section>
    </div>
  );
};

export default Hero;
