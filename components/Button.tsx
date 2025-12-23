import { AllHTMLAttributes, FC } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = AllHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  href: string;
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  href,
  ...props
}) => {
  const baseClasses = "inline-block px-6 py-3 rounded transition-colors font-medium text-center no-underline";
  
  const variantClasses = {
    primary: "bg-wine-red text-white hover:bg-soft-rose-brick",
    secondary: "bg-transparent border-2 border-wine-red text-wine-red hover:bg-wine-red hover:text-white",
  };

  return (
    <a
      href={href}
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
