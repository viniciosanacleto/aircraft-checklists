import { Checklist } from "../type";

const Cessna152: Checklist = {
  manufacturer: "Cessna",
  model: "152",
  checklists: [
    {
      name: "BEFORE STARTING ENGINE",
      checklist: [
        { item: "Preflight Inspection", expect: "COMPLETE" },
        { item: "Passenger Briefing", expect: "COMPLETE" },
        { item: "Seats, Seatbelts", expect: "ADJUSTED/FASTENED" },
        { item: "Brakes", expect: "TEST/SET" },
        { item: "Circuit Breakers", expect: "CHECK IN" },
        { item: "Fuel Shutoff Valve", expect: "ON" },
      ],
    },
    {
      name: "STARTING ENGINE",
      checklist: [
        { item: "Mixture", expect: "RICH" },
        { item: "Carburetor Heat", expect: "COLD" },
        { item: "Master Switch", expect: "ON" },
        { item: "Beacon/Strobes", expect: "ON" },
        { item: "Key", expect: "IN IGNITION" },
        { item: "Throttle", expect: "OPEN 1/4 - 1/8 Inch" },
        { item: "Brakes", expect: "ON" },
        { item: "Prime", expect: "AS REQUIRED (Verify In and Locked)" },
        { item: "Propeller Area", expect: "CLEAR" },
        {
          item: "Ignition Switch",
          expect: "START",
        },
        { item: "Throttle", expect: "IDLE (1000 RPM or Below)" },
        { item: "Oil Pressure", expect: "RISING" },
        { item: "Ammeter", expect: "STARTER DISENGAGED " },
        { item: "Flaps", expect: "UP" },
        { item: "Radios/Avionics", expect: "ON/FREQ. SET" },
        { item: "Transponder", expect: "STANDBY/SET" },
        { item: "Taxi to Run-Up Area", expect: "CHECK" },
        { item: "Brakes", expect: "TEST" },
      ],
    },
    {
      name: "BEFORE TAKEOFF",
      checklist: [
        { item: "Cabin Doors", expect: "CLOSED/LATCHED" },
        { item: "Flight Controls", expect: "FREE/CORRECT" },
        { item: "Elevator Trim", expect: "TAKEOFF" },
        { item: "Flight Instruments", expect: "CHECK/SET" },
        { item: "Brakes", expect: "ON/SET" },
        { item: "Throttle", expect: "1700 RPM" },
        { item: "Magnetos", expect: "CHECK RIGHT, then LEFT" },
        { item: "Carburetor Heat", expect: "TEST" },
        { item: "Ammeter", expect: "CHARGING" },
        { item: "Engine Instruments", expect: "TEMP & PRESSURE" },
        { item: "Suction Gauge", expect: "CHECK" },
        { item: "Throttle", expect: "IDLE" },
        { item: "Throttle Friction Lock", expect: "ADJUST" },
        { item: "Lights", expect: "AS REQUIRED" },
        { item: "Radios/Avionics", expect: "SET" },
        { item: "Transponder", expect: "ALTITUDE" },
        { item: "Mixture", expect: "RICH" },
      ],
    },
    {
      name: "NORMAL TAKEOFF",
      checklist: [
        { item: "Wing Flaps", expect: "0°-10°" },
        { item: "Carburetor Heat", expect: "COLD" },
        { item: "Throttle", expect: "FULL/OPEN" },
        { item: "Elevator Control", expect: "ROTATE @ 50 KIAS" },
        { item: "Climb Speed", expect: "65-75KIAS" },
      ],
    },
    {
      name: "SHORT FIELD TAKEOFF",
      checklist: [
        { item: "Wing Flaps", expect: "10°" },
        { item: "Carburetor Heat", expect: "Cold" },
        { item: "Brakes", expect: "APPLY" },
        { item: "Mixture", expect: "RICH" },
        { item: "Throttle", expect: "FULL/OPEN" },
        { item: "Brakes", expect: "RELEASE" },
        { item: "Elevator Control", expect: "ROTATE @ 50 KIAS" },
        { item: "Climb Speed", expect: "54KIAS(Until Obstacles Cleared)" },
        { item: "Wing Flaps", expect: "RETRACT @ 60+ KIAS" },
      ],
    },
    {
      name: "CRUISE",
      checklist: [
        { item: "Pitch", expect: "LEVEL FLIGHT" },
        { item: "Power", expect: "SET TO CRUISE" },
        { item: "Trim", expect: "SET" },
        { item: "Mixture", expect: "LEANED" },
      ],
    },
    {
      name: "DESCENT",
      checklist: [
        { item: "Power", expect: "AS REQUIRED" },
        { item: "Mixture", expect: "AS REQUIRED" },
        { item: "Carburetor Heat", expect: "AS REQUIRED" },
      ],
    },
    {
      name: "APPROACH",
      checklist: [
        { item: "Gas", expect: "SELECTOR ON" },
        { item: "Undercarriage", expect: "GOOD TIRE INFLATION" },
        { item: "Mixture", expect: "ENRICHEN AS APPROPRIATE" },
        { item: "Prop", expect: "FIXED" },
        { item: "Flaps", expect: "AS REQUIRED" },
        { item: "Seatbelts", expect: "FASTENED" },
        { item: "Switches", expect: "LIGHTS AS REQUIRED" },
      ],
    },
    {
      name: "NORMAL LANDING",
      checklist: [
        {
          item: "Airspeed",
          expect: "60-70 KIAS (Flaps Up) or 55-65 KIAS (Flaps 30°)",
        },
        { item: "Wing Flaps", expect: "AS DESIRED (Below 85 KIAS)" },
        { item: "Airspeed", expect: "55-65 KIAS FINAL APPROACH" },
      ],
    },
    {
      name: "SHORT FIELD LANDING",
      checklist: [
        {
          item: "Airspeed",
          expect: "60-70 KIAS (Flaps Up)",
        },
        {
          item: "Wing Flaps",
          expect: "30°(Below 85 KIAS)",
        },
        {
          item: "Airspeed",
          expect: "MAINTAIN 55 KIAS FINAL APPROACH",
        },
        {
          item: "Power",
          expect: "IDLE (After Obstacle Clearance)",
        },
        {
          item: "Touchdown",
          expect: "MAIN GEAR FIRST",
        },
        {
          item: "Brake",
          expect: "APPLY HEAVILY",
        },
        {
          item: "Wing Flaps",
          expect: "RETRACT",
        },
      ],
    },
    {
      name: "AFTER LANDING",
      checklist: [
        { item: "Carburetor Heat", expect: "COLD" },
        { item: "Wing Flaps", expect: "UP" },
        { item: "Transponder", expect: "STANDBY" },
      ],
    },
    {
      name: "SECURING AIRCRAFT",
      checklist: [
        { item: "Radios,Electrical", expect: "OFF" },
        { item: "Transponder", expect: "1200/OFF" },
        { item: "Magnetos", expect: "CHECK GROUND" },
        { item: "Throttle", expect: "1200 RPM" },
        { item: "Mixture", expect: "IDLE/CUT-OFF" },
        { item: "Ignition Switch", expect: "OFF" },
        { item: "Master Switch", expect: "OFF" },
        { item: "Control Lock", expect: "ON" },
        { item: "Fuel", expect: "CHECK QUANTITY" },
        { item: "Secure", expect: "TIE DOWN and LOCK" },
        { item: "Flight Plan", expect: "CLOSE" },
      ],
    },
  ],
};

export default Cessna152;
