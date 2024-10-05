import { Checklist } from "../type";

const BeechcraftKingAir350: Checklist = {
  manufacturer: "Beechcraft",
  model: "King Air 350",
  checklists: [
    {
      name: "PRE FLIGHT",
      checklist: [
        { item: "Fuel", expect: "SET" },
        { item: "Battery Bus", expect: "NORMAL" },
        { item: "Battery Switch", expect: "ON" },
        { item: "External Power", expect: "AS REQUIRED" },
        { item: "Master Light", expect: "AS REQUIRED" },
        { item: "External Lights", expect: "AS REQUIRED" },
        { item: "Avionics Master Switch", expect: "ON" },
        { item: "Bleeds", expect: "ENVIR OFF" },
        { item: "Pitch Trim", expect: "1 or 2 UNITS UP" },
        { item: "Power Levers", expect: "IDLE" },
        { item: "Prop Levers", expect: "FULL FOWARD" },
        { item: "Condition Levers", expect: "CUTOFF" },
        { item: "Flaps", expect: "UP" },
        { item: "Rudder Boost", expect: "ON" },
        { item: "Elec Trim", expect: "ON" },
        { item: "Pressurization", expect: "1000 FT ABOVE CRZ FL" },
        { item: "Oxygen", expect: "PULL ON/CHECK" },
      ],
    },
    {
      name: "BEFORE START",
      checklist: [
        { item: "Flight Plan / AP", expect: "SET" },
        { item: "Standby Pumps", expect: "OFF" },
        { item: "Crossfeed", expect: "OFF" },
        { item: "Aux Transfer Switch", expect: "AUTO" },
        { item: "Avionics Master Switch", expect: "OFF" },
        { item: "ENG Anti-ice", expect: "ON" },
        { item: "Parking Brake", expect: "SET" },
        { item: "Beacon", expect: "ON" },
      ],
    },
    {
      name: "AFTER START",
      checklist: [
        { item: "External Power", expect: "OFF" },
        { item: "Generators", expect: "ON" },
        { item: "Inverters", expect: "ON" },
        { item: "Ice Protection", expect: "ON" },
      ],
    },
    {
      name: "BEFORE TAXI",
      checklist: [
        { item: "Avionics Master Switch", expect: "ON" },
        { item: "Instruments", expect: "CHECK" },
        { item: "Pitch Trim", expect: "SET" },
        { item: "Flight Controls", expect: "CHECK" },
        { item: "Transponder", expect: "SET" },
        { item: "Taxi Light", expect: "ON" },
      ],
    },
    {
      name: "BEFORE TAKEOFF",
      checklist: [
        { item: "Flaps", expect: "CHECK" },
        { item: "Autopilot", expect: "CHECK" },
        { item: "Transponder", expect: "SET / ON" },
        { item: "WX Radar", expect: "ON" },
        { item: "Landing Lights", expect: "ON" },
        { item: "Strobe Ligts", expect: "ON" },
        { item: "Elapsed Timer", expect: "START" },
      ],
    },
    {
      name: "AFTER TAKEOFF",
      checklist: [
        { item: "Landing Gear", expect: "UP" },
        { item: "Flaps", expect: "UP" },
        { item: "Land/Taxi Lights", expect: "OFF" },
        { item: "Yaw Damper", expect: "ON" },
        { item: "Prop Sync", expect: "ON" },
        { item: "Cabin Press", expect: "CHECK" },
        { item: "Altimeters", expect: "STD" },
      ],
    },
    {
      name: "CRUISE",
      checklist: [
        { item: "Autofeather", expect: "OFF" },
        { item: "Instruments", expect: "CHECK" },
        { item: "Cabin Press", expect: "CHECK" },
        { item: "Pass Signs", expect: "AS REQUIRED" },
      ],
    },
    {
      name: "DESCENT",
      checklist: [
        { item: "Flight Plan / Radios", expect: "SET / CHECK" },
        { item: "Cabin Press", expect: "SET / CHECK" },
        { item: "Pass Signs", expect: "ON" },
        { item: "Autofeather", expect: "ARM" },
        { item: "Approach Briefing", expect: "COMPLETE" },
      ],
    },
    {
      name: "APPROACH",
      checklist: [
        { item: "Altimeters", expect: "SET" },
        { item: "Cabin Press", expect: "CHECK" },
        { item: "Pass Signs", expect: "ON" },
        { item: "Missed Approach", expect: "REVIEW" },
      ],
    },
    {
      name: "LANDING",
      checklist: [
        {item: "Langing Gear",expect: "DOWN 3 GREEN",},
        {item: "Landing Lights",expect: "ON",},
        {item: "Prop Lever",expect: "FULL FOWARD",},
        {item: "Prop Sync",expect: "OFF",},
        {item: "Yaw Damper",expect: "OFF",},
        {item: "Flaps",expect: "DOWN",},
      ],
    },
    {
      name: "AFTER LANDING",
      checklist: [
        { item: "Flaps", expect: "UP" },
        { item: "Ignition", expect: "OFF" },
        { item: "Eng Anti-ice", expect: "ON" },
        { item: "Autofeather", expect: "OFF" },
        { item: "Ice Protection", expect: "OFF" },
        { item: "Bleeds", expect: "OFF" },
        { item: "Pitch Trim", expect: "ZERO" },
        { item: "Transponder", expect: "STANDBY" },
        { item: "Elapsed Timer", expect: "STOP" },
      ],
    },
    {
      name: "CUTOFF",
      checklist: [
        { item: "Avionics Master Switch", expect: "OFF" },
        { item: "Parking Brake", expect: "SET" },
        { item: "Condition Levers", expect: "CUTOFF" },
        { item: "Prop Levers", expect: "FEATHER" },
        { item: "Beacon", expect: "OFF" },
        { item: "Eng Anti-ice", expect: "OFF" },
        { item: "Inverters", expect: "OFF" },
        { item: "Generators", expect: "OFF" },
        { item: "External Power", expect: "AS REQUIRED" },
        { item: "Lights", expect: "OFF" },
        { item: "Battery Switch", expect: "OFF" },
        
      ],
    },
  ],
};

export default BeechcraftKingAir350;
