import { Checklist } from "../type";

const CirrusSF50: Checklist = {
  manufacturer: "Cirrus",
  model: "Vision Jet SF-50",
  checklists: [
    {
      name: "BEFORE START",
      checklist: [
        { item: "Preflight Inspection", expect: "COMPLETE" },
        { item: "CAPS Pin", expect: "REMOVED and STOWED" },
        { item: "Passengers", expect: "BRIEFED" },
        { item: "Door", expect: "CLOSED and LATCHED" },
        { item: "Seat Belts", expect: "SECURED" },
        { item: "Parking Brake", expect: "ON" },
        { item: "BAT 1 and BAT 2", expect: "ON" },
        { item: "GEN 1 and GEN 2", expect: "ON" },
        { item: "NAV Lights", expect: "ON" },
        { item: "Master Oxygen Switch", expect: "ON" },
        {
          item: "Avionics Initialization and Annunciation",
          expect: "COMPLETE",
        },
      ],
    },
    {
      name: "ENGINE START",
      checklist: [
        { item: "Power", expect: "IDLE" },
        { item: "Parking Brake", expect: "ON" },
        { item: "Transponder", expect: "STBY / ON" },
        { item: "Engine Start/Stop", expect: "RUN" },
        { item: "Engine Instruments", expect: "MONITOR" },
        { item: "Fresh Air", expect: "BLEED ON" },
      ],
    },
    {
      name: "BEFORE TAXI",
      checklist: [
        { item: "COM / NAV/ GPS", expect: "SET" },
        { item: "Fuel Totalizer", expect: "SET" },
        { item: "ATIS / Clearance", expect: "OBTAIN" },
        { item: "Altimeter", expect: "SET" },
        { item: "Rwy HDG and Init Alt", expect: "SET" },
        { item: "Departure Briefing", expect: "COMPLETE" },
        { item: "Flight Controls", expect: "CHECK / FREE" },
        { item: "Trims", expect: "CHECK 3 SET" },
        { item: "Flaps", expect: "50%" },
        { item: "Probe Heat", expect: "ON" },
        { item: "TO/GA Button", expect: "PRESS" },
        { item: "FD MODE NAV / HDG", expect: "SET" },
        { item: "Parking Brake", expect: "RELEASE" },
      ],
    },
    {
      name: "BEFORE TAKEOFF",
      checklist: [
        { item: "Transponder", expect: "ALT" },
        { item: "Strobe Lights", expect: "ON" },
        { item: "Landing Light", expect: "ON" },
        { item: "Ice Protection", expect: "As Required" },
      ],
    },
    {
      name: "AFTER TAKEOFF",
      checklist: [
        { item: "Landing Gear", expect: "UP" },
        { item: "Flaps", expect: "UP" },
        { item: "Climb Power", expect: "SET" },
        { item: "Engine Temp and Pressure", expect: "CHECK" },
        { item: "Cabin Pressure", expect: "CHECK" },
        { item: "Landing Light", expect: "OFF" },
        { item: "Ice Protection", expect: "AS REQUIRED" },
      ],
    },
    {
      name: "CRUISE",
      checklist: [
        { item: "Altimeter", expect: "CHECK STD" },
        { item: "Power", expect: "(NORM / MOR/LRO) SET" },
        { item: "Fuel", expect: "CHECK" },
        { item: "Cabin Pressure", expect: "CHECK" },
        { item: "Ice Protection", expect: "AS REQUIRED" },
      ],
    },
    {
      name: "DESCENT",
      checklist: [
        { item: "Power", expect: "AS REQUIRED" },
        { item: "Fuel", expect: "CHECK" },
        { item: "Ice Protection", expect: "AS REQUIRED" },
        { item: "Seat Belts", expect: "ON" },
        { item: "Approach Briefing", expect: "COMPLETE" },
      ],
    },
    {
      name: "APPROACH",
      checklist: [
        { item: "Altimeter", expect: "SET" },
        { item: "NAV Aids", expect: "IDENTIFIED" },
        { item: "Landing Light", expect: "ON" },
      ],
    },
    {
      name: "LANDING",
      checklist: [
        { item: "Landing Gear", expect: "DOWN and LOCKED" },
        { item: "Flaps", expect: "50%-100% AS REQUIRED" },
        { item: "Ice Protection", expect: "AS REQUIRED" },
        { item: "Airspeed", expect: "VREF to VREF + 10" },
        { item: "Windshield IPS Switch", expect: "OFF" },
      ],
    },
    {
      name: "AFTER LANDING",
      checklist: [
        { item: "Flaps", expect: "UP" },
        { item: "Transponder", expect: "ON / STBY" },
        { item: "Lights", expect: "AS REQUIRED" },
        { item: "Ice Protection", expect: "OFF" },
      ],
    },
    {
      name: "SHUTDOWN",
      checklist: [
        { item: "Landing Light", expect: "OFF" },
        { item: "Transponder", expect: "STBY" },
        { item: "Parking Brake", expect: "ON" },
        { item: "Power", expect: "IDLE" },
        { item: "Probe Heat", expect: "OFF" },
        { item: "Fresh Air", expect: "BLEED OFF" },
        { item: "Master Oxygen Switch", expect: "OFF" },
        { item: "Engine Start/Stop", expect: "OFF" },
        { item: "NAV and Strobe Lights", expect: "OFF" },
        { item: "GEN 1 and GEN 2", expect: "OFF" },
        { item: "BAT 1 and BAT 2", expect: "OFF" },
        { item: "CAPS Pin", expect: "REPLACE" },
        { item: "Door", expect: "OPEN" },
      ],
    },
  ],
};

export default CirrusSF50;
