import style from "./ConversionTools.module.scss";

import Button from "@/components/Button/Button";

export default function ConversionTools() {
  return (
    <div className={style.ConversionTools}>
      <div className={style.Menu}>
        <Button>ATM. PRESSURE (hPA, inHg)</Button>
        <Button>DISTANCE (nm, miles, km)</Button>
        <Button>WEIGHT (kg, lb)</Button>
      </div>
    </div>
  );
}
