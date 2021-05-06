import { AllHTMLAttributes, FC } from "react";
import clsx from 'clsx';

const Section: FC<AllHTMLAttributes<HTMLDivElement>> = ({children, className, ...props }) => {
  return (
    <section {...props} className={clsx(className)}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default Section;