import React from "react";
import PropTypes from "prop-types";

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

const StaffPitch = ({ clef, id, type, toggleNote }) => {
  const isNote = clef != undefined && id != undefined ? true : false;
  const pitch = isNote ? staffPitchRefs[clef][id] : undefined;

  return (
    <div
      className={"staff-space"}
      onClick={() => {
        if (isNote) {
          if (toggleNote) {
            toggleNote(pitch.string);
          } else {
            console.log(pitch.string);
          }
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
  toggleNote: PropTypes.func,
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

const Staff = ({ clef, hasLines, toggleNote }) => {
  const staffIds = clef == "midrange" ? gapIds : fullStaffIds;

  return (
    <div className={"staff"}>
      <Clef clef={clef} />
      {staffIds.map((id) => (
        <StaffPitch
          clef={clef}
          id={id}
          type={hasLines && (id + 1) % 2 ? "staff-line" : "staff-space"}
          toggleNote={toggleNote}
          key={id}
        />
      ))}
    </div>
  );
};

Staff.propTypes = {
  clef: PropTypes.string.isRequired,
  hasLines: PropTypes.bool.isRequired,
  toggleNote: PropTypes.func,
};

Clef.propTypes = {
  clef: PropTypes.string.isRequired,
};

const GrandStaff = ({ toggleNote }) => (
  <div className={"grand-staff"}>
    <Staff clef={"supertreble"} toggleNote={toggleNote} hasLines={false} />
    <Staff clef={"treble"} toggleNote={toggleNote} hasLines={true} />
    <Staff clef={"midrange"} toggleNote={toggleNote} hasLines={false} />
    <Staff clef={"bass"} toggleNote={toggleNote} hasLines={true} />
    <Staff clef={"subbass"} toggleNote={toggleNote} hasLines={false} />
  </div>
);

GrandStaff.propTypes = {
  toggleNote: PropTypes.func,
};

const NoteColumn = () => <div className={"note-column"}></div>;

const ClickableGrandStaff = ({ noteList, toggleNote }) => (
  <div className={"clickable-staff"}>
    <NoteColumn noteList={noteList} />
    <GrandStaff toggleNote={toggleNote} />
  </div>
);

ClickableGrandStaff.propTypes = {
  noteList: PropTypes.array.isRequired,
  toggleNote: PropTypes.func.isRequired,
};

export default ClickableGrandStaff;
