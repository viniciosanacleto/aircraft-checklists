import style from "./ChecklistBoard.module.scss";
import { B612_Mono } from "next/font/google";

import Board from "@/components/Board/Board";
import ChecklistItem from "@/components/ChecklistItem/ChecklistItem";
import { ChecklistBoardProps } from "./types";
import { slugify } from "@/utils/slugify";

const font = B612_Mono({ subsets: ["latin"], weight: "700" });

export default function ChecklistBoard({ title, items }: ChecklistBoardProps) {
  return (
    <div className={style.ChecklistBoard}>
      <Board title={title} className={style.Board}>
        {items.map((item) => {
          return (
            <ChecklistItem
              check={item.item}
              expect={item.expect}
              key={`item-${slugify(item.item)}-${slugify(item.expect)}`}
              className={font.className}
            />
          );
        })}
      </Board>
    </div>
  );
}
