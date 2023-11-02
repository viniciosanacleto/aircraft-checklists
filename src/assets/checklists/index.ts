import Cessna152 from "./aircrafts/cessna-152";
import CessnaCitationCJ4 from "./aircrafts/cessna-citation-cj4";
import AirbusA320 from "./aircrafts/airbus-a320-a32nx";
import CirrusSF50 from "./aircrafts/cirrus-vision-sf50";
import Boeing738 from "./aircrafts/boeing-738";
import { Checklist } from "./type";

const Checklists: { [id: string]: Checklist } = {
  "cessna-152": Cessna152,
  "cessna-citation-cj4": CessnaCitationCJ4,
  "airbus-a320-a32nx": AirbusA320,
  "cirrus-sf50": CirrusSF50,
  "boeing-738": Boeing738
};

export default Checklists;
