import { AllHTMLAttributes, FC } from "react";
import clsx from "clsx";
import styles from "./Hero.module.scss";
import Section from "./Section";

type HeroProps = AllHTMLAttributes<HTMLDivElement> & {
  waveLines?: number;
};

const Hero: FC<HeroProps> = ({
  children,
  className,
  waveLines = 10,
  ...props
}) => {
  return (
    <div className={clsx(styles.hero, className)}>
      <div className={styles.waveContainer}>
        {Array.from({ length: waveLines }).map((_, index) => {
          // Position lines close together vertically in the center
          // Calculate offset from center (in pixels) - lines spaced 8px apart
          const offsetFromCenter = (index - (waveLines - 1) / 2) * 8;
          
          return (
            <div
              key={index}
              className={styles.waveLine}
              style={{
                '--offset-y': `${offsetFromCenter}px`,
                animationDelay: `${index * 0.1}s`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
      <Section {...props}>{children}</Section>
    </div>
  );
};

export default Hero;
