import { AllHTMLAttributes, FC } from "react";
import clsx from "clsx";
import styles from "./GlassContainer.module.scss";

const GlassContainer: FC<AllHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.glassContainer, className)} {...props}>
      {children}
    </div>
  );
};

export default GlassContainer;
