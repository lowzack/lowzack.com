import { AllHTMLAttributes, FC } from "react";
import clsx from "clsx";

const Section: FC<AllHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section {...props} className={clsx(className)}>
      <div className="container mx-auto sm:px-4" style={{ maxWidth: '1200px' }}>{children}</div>
    </section>
  );
};

export default Section;
