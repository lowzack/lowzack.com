import { AllHTMLAttributes, FC } from "react";
import clsx from 'clsx';
import styles from './Hero.module.scss'
import Section from "./Section";

const Hero: FC<AllHTMLAttributes<HTMLDivElement>> = ({children, className, ...props }) => {
  return (
    <Section {...props} className={clsx(styles.hero, className)} >
      {children}
    </Section>
  )
}

export default Hero;