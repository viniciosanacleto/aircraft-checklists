import Cessna152 from "./aircrafts/cessna-152";
import CessnaCitationCJ4 from "./aircrafts/cessna-citation-cj4";
import AirbusA320 from "./aircrafts/airbus-a320-a32nx";
import CirrusSF50 from "./aircrafts/cirrus-vision-sf50";
import Boeing738 from "./aircrafts/boeing-738";
import Learjet35 from "./aircrafts/learjet-35";
import AirbusA300600 from "./aircrafts/airbus-a300-600";
import { Checklist } from "./type";

const Checklists: { [id: string]: Checklist } = {
  "cessna-152": Cessna152,
  "cessna-citation-cj4": CessnaCitationCJ4,
  "airbus-a320-a32nx": AirbusA320,
  "cirrus-sf50": CirrusSF50,
  "boeing-738": Boeing738,
  "learjet-35": Learjet35,
  "airbus-a300-600": AirbusA300600
};

export default Checklists;
