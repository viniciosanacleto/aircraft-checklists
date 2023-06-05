import classNames from "classnames";
import style from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const defaultClassNames = classNames(className, style.Footer);

  return (
    <footer className={defaultClassNames}>
      <div className={style.Left}>
        <div className={style.Git}>
          <Image
            src={"img/icons/github.svg"}
            alt="Github"
            width={20}
            height={20}
          />
          <span>Open Source</span>
          <a href="https://github.com/viniciosanacleto/aircraft-checklists" target="_blank">Github</a>
        </div>
      </div>

      <div className={style.Right}>
        <div className={style.Menu}>
            <Link href="/">Home</Link>
        </div>
      </div>
    </footer>
  );
}
