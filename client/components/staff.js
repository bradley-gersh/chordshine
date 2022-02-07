import React from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { toggleNote } from "../store";

import { Treble, Bass } from "./Icons";

// const treblePitchRefs = ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5"];
// const bassPitchRefs = ["G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3"];

const NoteToggle = ({ className, notes, setNotes, noteName }) => {
  <div
    className={className}
    onClick={() => {
      if (noteName) {
        const noteInd = notes.indexOf(noteName);
        if (noteInd > -1) {
          setNotes([...notes.slice(noteInd), ...notes.slice(noteInd + 1)]);
        } else {
          setNotes([...notes, noteName]);
        }
      }
    }}
  ></div>;
};

const StaffLineUnit = ({ notes, setNotes, noteName }) => (
  <NoteToggle
    className={"staff-line-unit"}
    notes={notes}
    setNotes={setNotes}
    noteName={noteName}
  ></NoteToggle>
);

const StaffSpaceUnit = ({ notes, setNotes, noteName }) => (
  <NoteToggle
    className={"staff-space-unit"}
    notes={notes}
    setNotes={setNotes}
    noteName={noteName}
  ></NoteToggle>
);

const StaffLine = (notes, setNotes, noteName) => {
  // useState to store the note value of this line or space
  return (
    <div className={"staff-line"}>
      <StaffSpaceUnit />
      <StaffLineUnit notes={notes} setNotes={setNotes} noteName={noteName} />
      <StaffSpaceUnit />
    </div>
  );
};

const StaffSpace = (notes, setNotes, noteName) => {
  // useState to store the note value of this line or space
  return (
    <div className={"staff-space"}>
      <StaffSpaceUnit />
      <StaffSpaceUnit notes={notes} setNotes={setNotes} noteName={noteName} />
      <StaffSpaceUnit />
    </div>
  );
};

const Clef = (props) => {
  return (
    <div className={"clef"}>
      {props.clef.toLowerCase() === "bass" ? <Bass /> : <Treble />}
    </div>
  );
};

const TrebleStaff = ({ clef, notes, setNotes }) => {
  return (
    <div className={"staff"}>
      <Clef clef={clef} />
      <StaffLine notes={notes} setNotes={setNotes} id={1} noteName={"Fn5"} />
      <StaffSpace notes={notes} setNotes={setNotes} id={2} noteName={"En5"} />
      <StaffLine notes={notes} setNotes={setNotes} id={3} noteName={"Dn5"} />
      <StaffSpace notes={notes} setNotes={setNotes} id={4} noteName={"Cn5"} />
      <StaffLine notes={notes} setNotes={setNotes} id={5} noteName={"Bn4"} />
      <StaffSpace notes={notes} setNotes={setNotes} id={6} noteName={"An4"} />
      <StaffLine notes={notes} setNotes={setNotes} id={7} noteName={"Gn4"} />
      <StaffSpace notes={notes} setNotes={setNotes} id={8} noteName={"Fn4"} />
      <StaffLine notes={notes} setNotes={setNotes} id={9} noteName={"En4"} />
    </div>
  );
};

const BassStaff = ({ clef, notes, setNotes }) => {
  return (
    <div className={"staff"}>
      <Clef clef={clef} />
      <StaffLine notes={notes} setNotes={setNotes} id={1} noteName={"An3"} />
      <StaffSpace notes={notes} setNotes={setNotes} id={2} noteName={"Gn3"} />
      <StaffLine notes={notes} setNotes={setNotes} id={3} noteName={"Fn3"} />
      <StaffSpace notes={notes} setNotes={setNotes} id={4} noteName={"En3"} />
      <StaffLine notes={notes} setNotes={setNotes} id={5} noteName={"Dn3"} />
      <StaffSpace notes={notes} setNotes={setNotes} id={6} noteName={"Cn3"} />
      <StaffLine notes={notes} setNotes={setNotes} id={7} noteName={"Bn2"} />
      <StaffSpace notes={notes} setNotes={setNotes} id={8} noteName={"An2"} />
      <StaffLine notes={notes} setNotes={setNotes} id={9} noteName={"Gn2"} />
    </div>
  );
};

TrebleStaff.propTypes = {
  clef: PropTypes.string.isRequired,
  notes: PropTypes.object.isRequired,
  setNotes: PropTypes.func.isRequired,
};

BassStaff.propTypes = {
  clef: PropTypes.string.isRequired,
  notes: PropTypes.object.isRequired,
  setNotes: PropTypes.func.isRequired,
};

Clef.propTypes = {
  clef: PropTypes.string.isRequired,
};

StaffSpaceUnit.propTypes = {
  noteName: PropTypes.string,
  notes: PropTypes.object.isRequired,
  setNotes: PropTypes.func.isRequired,
};

StaffLineUnit.propTypes = {
  noteName: PropTypes.string,
  notes: PropTypes.object.isRequired,
  setNotes: PropTypes.func.isRequired,
};

StaffSpace.propTypes = {
  noteName: PropTypes.string,
  notes: PropTypes.object.isRequired,
  setNotes: PropTypes.func.isRequired,
};

StaffLine.propTypes = {
  noteName: PropTypes.string,
  notes: PropTypes.object.isRequired,
  setNotes: PropTypes.func.isRequired,
};

const Gap = () => (
  <div className={"gap"}>
    <StaffSpace noteName={"Db4"} />
    <StaffSpace noteName={"Cn4"} />
    <StaffSpace noteName={"Bn3"} />
  </div>
);

// const mapState = (state) => {
// notes: state.notes;
// };

// const mapDispatch = (dispatch) => {
// toggleNote: (noteName) => dispatch(toggleNote(noteName));
// };

export { TrebleStaff, BassStaff, Gap };
// export const Space = connect(mapState, mapDispatch)(StaffSpace);
// export const Line = connect(mapState, mapDispatch)(StaffLine);
