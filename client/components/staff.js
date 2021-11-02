import React from "react";
import { toggleNote } from "../store";

// const treblePitchRefs = ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5"];
// const bassPitchRefs = ["G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3"];

const StaffLineUnit = () => <div className={"staff-line-unit"}></div>;

const StaffSpaceUnit = () => <div className={"staff-space-unit"}></div>;

const StaffLine = () => (
  <div className={"staff-line"}>
    <StaffSpaceUnit />
    <StaffLineUnit />
    <StaffSpaceUnit />
  </div>
);

const StaffSpace = () => (
  <div className={"staff-space"}>
    <StaffSpaceUnit />
    <StaffSpaceUnit />
    <StaffSpaceUnit />
  </div>
);

const Staff = (props) => {
  // let pitchRefs = [];

  // if (props.clef.toLower() === "treble") {
  //   pitchRefs = treblePitchRefs;
  // } else if (props.clef.toLower() === "bass") {
  //   pitchRefs = bassPitchRefs;
  // } else {
  //   console.error("invalid clef");
  // }

  return (
    <div className={"staff"}>
      <StaffLine onClick={toggleNote} />
      <StaffSpace />
      <StaffLine />
      <StaffSpace />
      <StaffLine />
      <StaffSpace />
      <StaffLine />
      <StaffSpace />
      <StaffLine />
    </div>
  );
};

// Staff.propTypes = {
//   clef: PropTypes.string.isRequired,
// };

const Gap = () => (
  <div className={"gap"}>
    <StaffSpace />
    <StaffSpace />
    <StaffSpace />
  </div>
);

export { Staff, Gap };
