"use client";

import classNames from "classnames";
import style from "./ChecklistItem.module.scss";
import { useState } from "react";

interface ChecklistItemProps {
  className?: string;
  check: string;
  expect: string;
  startChecked?: boolean;
  onClick?: (checked: boolean) => void;
}

export default function ChecklistItem({
  className,
  check,
  expect,
  startChecked = false,
  onClick,
}: ChecklistItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(startChecked);

  const rootClassname = classNames(className, style.ChecklistItem, {
    [style.Checked]: isChecked,
  });

  const handleClick = () => {
    const nextValue = !isChecked;
    setIsChecked(nextValue);
    if (onClick) {
      onClick(nextValue);
    }
  };

  return (
    <div className={rootClassname} onClick={handleClick}>
      <div className={style.Checkbox}>{isChecked ? "+" : null}</div>
      <div className={style.CheckItemContainer}>
        {isChecked && <hr className={style.Crossline} />}
        <div className={style.Item}>{check}</div>
        <div className={style.Separator} />
        <div className={style.Expect}>{expect}</div>
      </div>
    </div>
  );
}
