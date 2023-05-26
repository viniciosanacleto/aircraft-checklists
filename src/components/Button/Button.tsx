import { ReactNode } from "react";
import style from "./Button.module.scss";
import classNames from "classnames";

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  const defaultClassNames = classNames(className, style.Button);

  return (
    <button
      className={defaultClassNames}
      onClick={onClick ? onClick : undefined}
    >
      {children}
    </button>
  );
}
