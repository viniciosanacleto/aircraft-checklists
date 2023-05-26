import { Checklist } from "../type";

const AirbusA320: Checklist = {
  manufacturer: "Airbus",
  model: "A320/A32NX",
  checklists: [
    {
      name: "POWER UP",
      checklist: [
        { item: "Parking Brake", expect: "SET" },
        { item: "Battery 1 & 2", expect: "ON" },
        { item: "External Power", expect: "AS REQ / ON" },
        { item: "Nav & Logo Lights", expect: "ON" },
        { item: "APU", expect: "START IF REQ." },
        { item: "External Power", expect: "OFF" },
        { item: "APU Bleed", expect: "ON" },
        { item: "ADIRS", expect: "NAV" },
        { item: "Fuel Pumps", expect: "ON" },
        { item: "Oxygen Crew Supply", expect: "ON" },
        { item: "Overhead Panel", expect: "CHECK (no white Lights)" },
        { item: "Emergency Exit Lights", expect: "ARM" },
        { item: "No Smoking", expect: "AUTO" },
      ],
    },

    {
      name: "AFTER MCDU SETUP",
      checklist: [
        { item: "Altimeter/Baro Ref (EFIS &STBY)", expect: "SET LOCAL" },
        { item: "FD Button", expect: "CHECK ON" },
        { item: "EFIS Modes & Lighting", expect: "AS REQ" },
        { item: "FCU SPD", expect: "CHECK DASHED" },
        { item: "FCU HDG", expect: "CHECK DASHED" },
        { item: "FCU ALT SEL", expect: "SET ALTITUDE" },
        { item: "Thrust Levers", expect: "CHECK" },
        { item: "Weather Radar", expect: "CHECK OFF" },
        { item: "Transponder/TCAS", expect: "SET / AUTO & STBY" },
      ],
    },

    {
      name: "BEFORE PUSHBACK & START",
      checklist: [
        { item: "DOORS", expect: "CLOSED" },
        { item: "Parking Brake", expect: "VERIFY SET" },
        { item: "Windows", expect: "CLOSED" },
        { item: "APU", expect: "verify ON or START" },
        { item: "External Power", expect: "VERIFY OFF" },
        { item: "APU Bleed", expect: "VERIFY ON" },
        { item: "Seat Belt Signs", expect: "ON" },
        { item: "Beacon", expect: "ON" },
        { item: "CHOCKS, CONES & GPU", expect: "REMOVED" },
        { item: "Pushback", expect: "IF REQ." },
      ],
    },

    {
      name: "ENGINE START",
      checklist: [
        { item: "ENG Mode Selector", expect: "IGN/START" },
        { item: "ENG 2 Master Switch", expect: "ON" },
        { item: "ENG 2 Parameters", expect: "MONITOR" },
        { item: "ENG 1 Master Switch", expect: "ON" },
        { item: "ENG 1 Parameters", expect: "MONITOR" },
      ],
    },

    {
      name: "BEFORE TAXI",
      checklist: [
        { item: "ENG Mode Selector", expect: "AS REQ / NORM" },
        { item: "APU Bleed", expect: "OFF" },
        { item: "APU Master", expect: "OFF" },
        { item: "Engine & Wing Anti-Ice", expect: "AS REQ" },
        { item: "Auto Brake", expect: "MAX" },
        { item: "Flaps", expect: "SET FOR T.O. / Flaps 1" },
        { item: "Ground Spoilers", expect: "ARM" },
        { item: "Rudder & Aileron Trim", expect: "ZERO" },
        { item: "Pitch Trim", expect: "AS CALCULATED" },
        { item: "Flight Controls", expect: "FREE & FULL MOVEMENT" },
        { item: "Strobes", expect: "AUTO" },
        { item: "Nose Lights", expect: "TAXI" },
        { item: "RWY Turn Off Lights", expect: "AS REQ / ON (at night)" },
      ],
    },

    {
      name: "BEFORE TAKEOFF",
      checklist: [
        { item: "Pack 1 & 2", expect: "AS REQ" },
        { item: "Engine & Wing Anti-Ice", expect: "AS REQ" },
        { item: "ENG Mode Selector", expect: "AS REQ" },
        { item: "Terrain on ND", expect: "AS REQ / CPT ND" },
        { item: "Weather Radar", expect: "AS REQ / F/O ND" },
        { item: "Pred.Windshear", expect: "ON" },
        { item: "Transponder/TCAS", expect: "TA" },
        { item: "TO Config Test", expect: "PUSH" },
        { item: "Nose Light", expect: "TAKEOFF" },
        { item: "Landing Lights", expect: "ON" },
        { item: "Strobe Lights", expect: "ON" },
        { item: "Elapsed Timer", expect: "START" },
      ],
    },

    {
      name: "AFTER TAKEOFF",
      checklist: [
        { item: "Landing Gear", expect: "VERIFY UP" },
        { item: "Flaps", expect: "VERIFY RETRACTED" },
        { item: "Ground Spoilers", expect: "DISARM" },
        { item: "Pack 1 & 2", expect: "ON" },
        { item: "Transponder/TCAS", expect: "TA/RA" },
      ],
    },

    {
      name: "CRUISE",
      checklist: [
        { item: "FMA ́s", expect: "CHECK" },
        { item: "Pressurization", expect: "CHECK" },
        { item: "Flight Plan", expect: "MONITOR" },
        { item: "Top Of Descent", expect: "CROSS CHECK" },
      ],
    },

    {
      name: "START APPROACH",
      checklist: [
        { item: "LS Button", expect: "ON" },
        { item: "Altimeters", expect: "Verify LOCAL" },
        { item: "Engine & Wing Anti-Ice", expect: "AS REQ" },
        { item: "ENG Mode Selector", expect: "AS REQ" },
      ],
    },

    {
      name: "FINAL APPROACH",
      checklist: [
        { item: "Auto Brakes", expect: "CHECK SET" },
        { item: "Ground Spoilers", expect: "ARM" },
        { item: "Landing Gear", expect: "VERIFY DOWN & GREEN" },
        { item: "Flaps", expect: "VERIFY SET" },
      ],
    },

    {
      name: "GO AROUND",
      checklist: [
        { item: "Thrust Levers", expect: "TO/GA" },
        { item: "Flaps", expect: "FLAPS 1 / RETRACT AS REQ." },
        { item: "Ground Spoilers", expect: "DISARM" },
      ],
    },

    {
      name: "AFTER LANDING",
      checklist: [
        { item: "Strobe Lights", expect: "OFF" },
        { item: "Landing Lights", expect: "OFF" },
        { item: "Nose Lights", expect: "TAXI" },
        { item: "RWY Turn Off Lights", expect: "AS REQ / ON (at night)" },
        { item: "Flaps", expect: "RETRACT" },
        { item: "Ground Spoilers", expect: "RETRACT" },
        { item: "Terrain On ND", expect: "OFF" },
        { item: "Weather Radar", expect: "OFF" },
        { item: "Pred.Windshear", expect: "OFF" },
        { item: "Transponder / TCAS", expect: "STBY" },
        { item: "APU", expect: "AS REQ / START" },
        { item: "Anti-Ice", expect: "AS REQ" },
      ],
    },

    {
      name: "PARKING/GATE",
      checklist: [
        { item: "Parking Brake", expect: "SET" },
        { item: "Nose Lights", expect: "OFF" },
        { item: "Anti-Ice", expect: "OFF" },
        { item: "APU Bleed", expect: "ON" },
        { item: "Elapsed Timer", expect: "STOP" },
        { item: "Engine Master 1 & 2", expect: "OFF" },
        { item: "Seatbelt Signs", expect: "OFF" },
        { item: "Beacon", expect: "OFF" },
        { item: "Fuel Pumps", expect: "OFF" },
        { item: "Transponder / TCAS", expect: "OFF" },
      ],
    },

    {
      name: "SECURING/LEAVING",
      checklist: [
        { item: "Parking Brake", expect: "SET" },
        { item: "Oxygen Crew Supply", expect: "OFF" },
        { item: "ADIRS 1+2+3", expect: "OFF" },
        { item: "Exterior Lights", expect: "OFF" },
        { item: "MAINT BUS Switch", expect: "AS REQ" },
        { item: "APU Bleed", expect: "OFF" },
        { item: "APU MASTER Switch", expect: "OFF" },
        { item: "EMER EXIT LT", expect: "OFF" },
        { item: "NO SMOKING", expect: "OFF" },
        { item: "EXT PWR", expect: "AS REQ" },
        { item: "BAT 1 & 2", expect: "OFF" },
      ],
    },
  ],
};

export default AirbusA320;
