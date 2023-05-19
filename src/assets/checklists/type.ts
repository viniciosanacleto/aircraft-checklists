export interface Checklist {
  manufacturer: string;
  model: string;
  checklists: {
    name: string;
    checklist: {
      item: string;
      expect: string;
    }[];
  }[];
}
