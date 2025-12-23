import { AllHTMLAttributes, FC } from "react";
import clsx from "clsx";

const Card: FC<AllHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "bg-white p-6 rounded-lg shadow-lg border border-warm-eggshell",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
