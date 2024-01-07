import { Checklist } from "../type";

const AirbusA300600: Checklist = {
  manufacturer: "Airbus",
  model: "A300-600",
  checklists: [
    {
      name: "BEFORE START",
      checklist: [
        { item: "Cockpit Prep", expect: "COMPLETED" },
        { item: "Fuel QTY", expect: "___KG/LB CHECK" },
        { item: "T.O Data", expect: "SET(BOTH)" },
        { item: "LDG Elev", expect: "___ SET" },
        { item: "Altimeters", expect: "___ SET(BOTH)" },
        { item: "BRK/Anti-Skid", expect: "NORM/ON" },
        { item: "Windows/Doors", expect: "CLOSED(BOTH)" },
        { item: "Beacon", expect: "ON" },
        { item: "Parking Brake", expect: "AS RQRD" },
      ],
    },
    {
      name: "AFTER START",
      checklist: [
        { item: "Pitch Trim", expect: "___ SET" },
        { item: "Rudder Trim", expect: "ZERO" },
        { item: "Spoilers", expect: "ARMED" },
        { item: "Slats/Flaps", expect: "___/___SET" },
        { item: "ECAM Status", expect: "CHECKED" },
        { item: "Anti-Ice", expect: "AS RQRD" },
        { item: "Hand Signal", expect: "RECEIVED" },
        { item: "APU", expect: "AS RQRD" },
        { item: "Ignition Switch", expect: "OFF" },
      ],
    },
    {
      name: "BEFORE TAKEOFF",
      checklist: [
        { item: "Flight Controls", expect: "CHECKED(BOTH)" },
        { item: "FLT Instruments", expect: "CHECKED(BOTH)" },
        { item: "Briefing", expect: "CONFIRMED" },
        { item: "V1,VR,V2/FLX TEMP", expect: "___ CHECKED" },
        { item: "Slats/Flaps", expect: "___/___ CHECKED" },
        { item: "T.O Config", expect: "NORMAL FOR TAKEOFF" },
        { item: "Transponder", expect: "SET" },
        { item: "TCAS", expect: "TA/RA" },
        { item: "Autobrake", expect: "MAX" },
        { item: "Ignition", expect: "AS RQRD" },
        { item: "WX Radar", expect: "AS RQRD" },
      ],
    },
    {
      name: "AFTER TAKEOFF/CLIMB",
      checklist: [
        { item: "Landing Gear", expect: "UP/NEUTRAL" },
        { item: "Slats/Flaps", expect: "RETRACTED" },
        { item: "Packs", expect: "ON" },
        { item: "Altimeters", expect: "___SET(BOTH)" },
        { item: "Taxi Lights/RWY Lights", expect: "OFF/AS RQRD" },
      ],
    },
    {
      name: "10.000FT",
      checklist: [
        { item: "Seat Belt Sign", expect: "AS REQ" },
        { item: "Pressurization", expect: "CHECKED" },
        { item: "LDG Lights", expect: "OFF/RETRACTED" },
        { item: "Altimeters", expect: "___SET(BOTH)" },
      ],
    },
    {
      name: "APPROACH",
      checklist: [
        { item: "Signs", expect: "SET" },
        { item: "Briefing", expect: "CONFIRMED" },
        { item: "ECAM Status", expect: "CHECKED" },
        { item: "Altimeters", expect: "___SET(BOTH)" },
        { item: "Minimums", expect: "___SET(BOTH)" },
        { item: "Ignition", expect: "CONT RELIGHT" },
        { item: "LDG Elev", expect: "___SET" },
      ],
    },
    {
      name: "BEFORE LANDING",
      checklist: [
        { item: "Landing Gear", expect: "DOWN-3 GREEN" },
        { item: "Autobrake", expect: "AS RQRD" },
        { item: "Anti-Skid", expect: "CHECKED" },
        { item: "Slats/Flaps", expect: "___/___SET" },
        { item: "Spoilers", expect: "ARMED" },
      ],
    },
    {
      name: "AFTER LANDING",
      checklist: [
        { item: "Slats/Flaps", expect: "RETRACTED" },
        { item: "Transponder", expect: "AS RQRD" },
        { item: "WX Radar", expect: "OFF" },
        { item: "Spoilers", expect: "DISARMED" },
        { item: "APU", expect: "STARTED" },
      ],
    },
    {
      name: "PARKING",
      checklist: [
        { item: "APU Bleed", expect: "AS RQRD" },
        { item: "Engines", expect: "OFF" },
        { item: "AP (DIFF Press)", expect: "CHECK ZERO" },
        { item: "Lights/Signs", expect: "AS RQRD" },
        { item: "Fuel Pumps", expect: "OFF" },
        { item: "Window and Probe Heat", expect: "OFF" },
        { item: "Parking BRK and Chocks", expect: "AS RQRD" },
      ],
    },
    {
      name: "SECURING AIRCRAFT",
      checklist: [
        { item: "NAV Systems", expect: "OFF" },
        { item: "Oxygen", expect: "OFF" },
        { item: "APU Bleed", expect: "OFF" },
        { item: "EMER Exit LT", expect: "DISARMED" },
        { item: "APU and BATT", expect: "OFF" },
      ],
    },
  ],
};

export default AirbusA300600;
