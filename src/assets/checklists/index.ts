import Cessna152 from "./aircrafts/cessna-152";
import CessnaCitationCJ4 from "./aircrafts/cessna-citation-cj4";
import { Checklist } from "./type";

const Checklists: {[id: string]: Checklist} = {
  "cessna-152": Cessna152,
  "cessna-citation-cj4": CessnaCitationCJ4,
}

export default Checklists
