import Link from "next/link";
import Image from "next/image";

import style from "./AircraftsMenu.module.scss";
import AircraftChecklists from "../../assets/checklists";
import classNames from "classnames";
import { slugify } from "@/utils/slugify";

export interface AircraftsMenuProps{
  className?: string
}

export default function AircraftsMenu({className}: AircraftsMenuProps) {
  const defaultClassNames = classNames(className, style.AircraftsMenu)

  const acftByManufacturer: {
    [key: string]: { key: string; model: string }[];
  } = {};
  Object.keys(AircraftChecklists).map((key) => {
    const manufacturer = AircraftChecklists[key].manufacturer;
    if (!acftByManufacturer[manufacturer]) {
      acftByManufacturer[manufacturer] = [];
    }

    acftByManufacturer[manufacturer].push({
      key,
      model: AircraftChecklists[key].model,
    });
  });

  return (
    <div className={defaultClassNames}>
      <ul className={style.ManufacturersList}>
        {Object.keys(acftByManufacturer).map((manufacturer) => {
          return (
            <li className={style.Manufacturer} key={`manufacturer-${slugify(manufacturer)}`}>
              <input type="checkbox" id={`manufacturer-${slugify(manufacturer)}`} />
              <label htmlFor={`manufacturer-${slugify(manufacturer)}`}>
                {manufacturer}
                <Image
                  src="img/icons/chevron-down.svg"
                  alt={`${manufacturer} menu`}
                  width={20}
                  height={20}
                  className={style.Chevron}
                />
              </label>

              <ul className={style.AircraftsList}>
                {acftByManufacturer[manufacturer].map((aircraft) => {
                  return (
                    <li className={style.Aircraft} key={`acft-${aircraft.key}`}>
                      <Link href={`/checklist/${aircraft.key}`}>
                        <Image
                          src="img/icons/airplane-right.svg"
                          alt="Expand"
                          width={22}
                          height={22}
                          className={style.Icon}
                        />
                        {aircraft.model}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
