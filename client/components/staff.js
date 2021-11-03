import React from "react";
import PropTypes from "prop-types";
import { toggleNote } from "../store";

// const treblePitchRefs = ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5"];
// const bassPitchRefs = ["G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3"];

const StaffLineUnit = () => <div className={"staff-line-unit"}></div>;

const StaffSpaceUnit = () => <div className={"staff-space-unit"}></div>;

const StaffLine = () => {
  // useState to store the note value of this line or space
  return (
    <div className={"staff-line"}>
      <StaffSpaceUnit />
      <StaffLineUnit />
      <StaffSpaceUnit />
    </div>
  );
};

const StaffSpace = () => {
  // useState to store the note value of this line or space
  return (
    <div className={"staff-space"}>
      <StaffSpaceUnit />
      <StaffSpaceUnit />
      <StaffSpaceUnit />
    </div>
  );
};

const Clef = (props) => {
  return (
    <div className={"clef"}>
      {props.clef.toLowerCase() === "bass" ? (
        <div>BASS</div>
      ) : (
        <div>TREBLE</div>
      )}
    </div>
  );
};

const Staff = (props) => {
  return (
    <div className={"staff"}>
      <Clef clef={props.clef} />
      <StaffLine clef={props.clef} id={1} />
      <StaffSpace clef={props.clef} id={2} />
      <StaffLine clef={props.clef} id={3} />
      <StaffSpace clef={props.clef} id={4} />
      <StaffLine clef={props.clef} id={5} />
      <StaffSpace clef={props.clef} id={6} />
      <StaffLine clef={props.clef} id={7} />
      <StaffSpace clef={props.clef} id={8} />
      <StaffLine clef={props.clef} id={9} />
    </div>
  );
};

Staff.propTypes = {
  clef: PropTypes.string.isRequired,
};

Clef.propTypes = {
  clef: PropTypes.string.isRequired,
};

const Gap = () => (
  <div className={"gap"}>
    <StaffSpace />
    <StaffSpace />
    <StaffSpace />
  </div>
);

export { Staff, Gap };
