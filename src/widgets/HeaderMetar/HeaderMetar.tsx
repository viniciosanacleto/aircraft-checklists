import classNames from "classnames";
import styles from "./HeaderMetar.module.scss";
import Image from "next/image";
export default function HeaderMetar() {
  return (
    <div className={classNames(styles.Pill, styles.NoMetarSelected)}>
      <img
        src={"/img/icons/weather.svg"}
        alt="Metar"
        width={18}
        height={18}
      ></img>
      SELECT METAR
    </div>
  );
}
