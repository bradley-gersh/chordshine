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

const superTreblePitchRefs = Array(9).fill("x0");
const treblePitchRefs = ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5"];
const midRangePitchRefs = ["B3", "C4", "D4"];
const bassPitchRefs = ["G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3"];
const subBassPitchRefs = Array(9).fill("x0");

const staffPitchRefs = {
  supertreble: superTreblePitchRefs.map((pitch) => new Pitch(pitch)),
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

// const StaffSpace = ({ clef, id }) => {
//   const isNote = clef != undefined && id != undefined ? true : false;

//   const [pitch, _] = isNote
//     ? useState(staffPitchRefs[clef][id])
//     : [undefined, () => {}];

//   return (
//     <div
//       className={"staff-space"}
//       onClick={() => {
//         if (isNote) {
//           console.log(pitch.string);
//         }
//       }}
//     >
//       <StaffSpaceUnit />
//       <StaffSpaceUnit />
//       <StaffSpaceUnit />
//     </div>
//   );
// };

// StaffSpace.propTypes = {
//   clef: PropTypes.string,
//   id: PropTypes.number,
// };

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

// const Gap = () => {};
//(
// <div className={"gap"}>
//   {[...Array(3).keys()].map((_, idx) => (
//     <StaffPitch clef={clef} key={idx} type={"gap"} />
//   ))}
// </div>
// );

export { Staff };
