import classNames from "classnames";
import style from "./Board.module.scss";

interface BoardProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
}

export default function Board({ className, title, children }: BoardProps) {
  const rootClassname = classNames(style.Board, className);

  return (
    <div className={rootClassname}>
      <div className={style.Title}>{title}</div>
      <main>{children}</main>
    </div>
  );
}
