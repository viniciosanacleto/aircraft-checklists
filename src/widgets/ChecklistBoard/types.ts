export type ChecklistBoardProps = {
  title: string;
  items: ChecklistItem[]
};

export type ChecklistItem = {
  item: string;
  expect: string;
};
