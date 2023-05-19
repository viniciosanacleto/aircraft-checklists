import { B612_Mono } from "next/font/google";
import style from "./page.module.scss";
import classNames from "classnames";
import Image from "next/image";
import AircraftsMenu from "@/widgets/AircraftsMenu/AircraftsMenu";

const font = B612_Mono({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <div className={style.Page}>
      <Image className={style.Icon} src={'img/icons/airplane-icon.svg'} alt="Icon" width={200} height={200}></Image>
      <h1 className={classNames(font.className, style.Title)}>
        Aircraft Checklists
      </h1>
      <AircraftsMenu className={style.Menu}/>
    </div>
  );
}
