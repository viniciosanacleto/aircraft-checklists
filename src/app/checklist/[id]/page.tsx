import Checklists from "../../../assets/checklists";
import { redirect } from "next/navigation";
import ChecklistBoard from "@/widgets/ChecklistBoard/ChecklistBoard";
import NoRealFlightTag from "@/components/NoRealFlightTag/NoRealFlightTag";
import { slugify } from "@/utils/slugify";

import style from "./page.module.scss";

interface ChecklistPageProps {
  params: { [key: string]: string };
}

export async function generateStaticParams() {
  return Object.keys(Checklists).map((checklistId) => ({
    id: checklistId,
  }));
}

export default function ChecklistPage({ params }: ChecklistPageProps) {
  const { id } = params;
  const aircraftChecklists = Checklists[id];

  if (!aircraftChecklists) {
    redirect("/404");
  }

  return (
    <div className={style.PageContainer}>
      <div className={style.Header}>
        <h1>
          {aircraftChecklists.manufacturer} - {aircraftChecklists.model}
        </h1>
        <NoRealFlightTag></NoRealFlightTag>
      </div>

      {aircraftChecklists.checklists.map((checklist) => {
        return (
          <div className={style.BoardContainer} key={slugify(checklist.name)}>
            <ChecklistBoard
              title={checklist.name}
              items={checklist.checklist}
            ></ChecklistBoard>
          </div>
        );
      })}
    </div>
  );
}
