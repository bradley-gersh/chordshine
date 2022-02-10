import React, { useState } from "react";
import PropTypes from "prop-types";
// import { toggleNote } from "../store";

import { Treble, Bass } from "./icons";

class Pitch {
  constructor(pitchStr, accidental) {
    this.diaPc = pitchStr[0];
    this.octave = pitchStr.slice(1);
    this.accidental = accidental ? accidental : "";
    this.string = this.diaPc + this.accidental + this.octave;
  }
}

const supTrebPitchRefs = ["G5", "A5", "B5", "C6", "D6", "E6", "F6", "G6", "A6"];
const treblePitchRefs = ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5"];
const midRangePitchRefs = ["B3", "C4", "D4"];
const bassPitchRefs = ["G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3"];
const subBassPitchRefs = ["E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2", "F2"];

const staffPitchRefs = {
  supertreble: supTrebPitchRefs.map((pitch) => new Pitch(pitch)),
  treble: treblePitchRefs.map((pitch) => new Pitch(pitch)),
  midrange: midRangePitchRefs.map((pitch) => new Pitch(pitch)),
  bass: bassPitchRefs.map((pitch) => new Pitch(pitch)),
  subbass: subBassPitchRefs.map((pitch) => new Pitch(pitch)),
};

const StaffLineUnit = () => <div className={"staff-line-unit"}></div>;

const StaffSpaceUnit = () => <div className={"staff-space-unit"}></div>;

const StaffPitch = ({ clef, id, type }) => {
  const isNote = clef != undefined && id != undefined ? true : false;

  const [pitch, _] = isNote
    ? useState(staffPitchRefs[clef][id])
    : [undefined, () => {}];

  return (
    <div
      className={"staff-space"}
      onClick={() => {
        if (isNote) {
          console.log(pitch.string);
        }
      }}
    >
      {type == "staff-line" ? (
        <>
          <StaffSpaceUnit />
          <StaffLineUnit />
          <StaffSpaceUnit />
        </>
      ) : type == "staff-pitch" ? (
        <>
          <StaffLineUnit />
          <StaffSpaceUnit />
          <StaffLineUnit />
        </>
      ) : (
        <>
          <StaffSpaceUnit />
          <StaffSpaceUnit />
          <StaffSpaceUnit />
        </>
      )}
    </div>
  );
};

StaffPitch.propTypes = {
  clef: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
};

const Clef = ({ clef }) => {
  return (
    <div className={"clef"}>
      {clef.toLowerCase() === "bass" ? (
        <Bass />
      ) : clef.toLowerCase() === "treble" ? (
        <Treble />
      ) : (
        <div></div>
      )}
    </div>
  );
};

const fullStaffIds = [...Array(9).keys()].reverse();
const gapIds = [...Array(3).keys()].reverse();

const Staff = ({ clef, hasLines }) => {
  const [staffIds, _] = useState(clef == "midrange" ? gapIds : fullStaffIds);

  return (
    <div className={"staff"}>
      <Clef clef={clef} />
      {staffIds.map((id) => (
        <StaffPitch
          clef={clef}
          id={id}
          type={hasLines && (id + 1) % 2 ? "staff-line" : "staff-space"}
          key={id}
        />
      ))}
    </div>
  );
};

Staff.propTypes = {
  clef: PropTypes.string.isRequired,
  hasLines: PropTypes.bool.isRequired,
};

Clef.propTypes = {
  clef: PropTypes.string.isRequired,
};

const GrandStaff = () => (
  <div className={"grand-staff"}>
    <Staff clef={"supertreble"} hasLines={false} />
    <Staff clef={"treble"} hasLines={true} />
    <Staff clef={"midrange"} hasLines={false} />
    <Staff clef={"bass"} hasLines={true} />
    <Staff clef={"subbass"} hasLines={false} />
  </div>
);

export default GrandStaff;
