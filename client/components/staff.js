import React from "react";
import PropTypes from "prop-types";

import { Treble, Bass } from "./Icons";
import NoteColumn from "./NoteColumn";
import Note from "./Note";

const supTrebNoteRefs = ["G5", "A5", "B5", "C6", "D6", "E6", "F6", "G6", "A6"];
const trebleNoteRefs = ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5"];
const midRangeNoteRefs = ["B3", "C4", "D4"];
const bassNoteRefs = ["G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3"];
const subBassNoteRefs = ["E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2", "F2"];

const staffNoteRefs = {
  supertreble: supTrebNoteRefs.map((note) => new Note(note)),
  treble: trebleNoteRefs.map((note) => new Note(note)),
  midrange: midRangeNoteRefs.map((note) => new Note(note)),
  bass: bassNoteRefs.map((note) => new Note(note)),
  subbass: subBassNoteRefs.map((note) => new Note(note)),
};

const StaffLineUnit = () => <div className={"staff-line-unit"}></div>;

const StaffSpaceUnit = () => <div className={"staff-space-unit"}></div>;

const StaffLedgerLineUnit = () => (
  <div className={"staff-ledger-line-unit"}></div>
);

const StaffSlot = ({ clef, id, type, toggleNote }) => {
  const isNote = clef != undefined && id != undefined ? true : false;
  const note = isNote ? staffNoteRefs[clef][id] : undefined;

  return (
    <div
      className={"staff-slot"}
      onClick={() => {
        if (isNote) {
          if (toggleNote) {
            toggleNote(note.string);
          } else {
            console.error("Not a toggleNote event.");
          }
        }
      }}
      onMouseOver={() => {
        console.log(`mouseover ${id}`);
      }}
    >
      {type === "staff-line" ? (
        <>
          <StaffSpaceUnit />
          <StaffLineUnit />
          <StaffSpaceUnit />
        </>
      ) : type === "staff-ledger-line" ? (
        <>
          <StaffSpaceUnit />
          <StaffLedgerLineUnit visible={false} />
          <StaffSpaceUnit />
        </>
      ) : (
        // type === "staff-space"
        <>
          <StaffSpaceUnit />
          <StaffSpaceUnit />
          <StaffSpaceUnit />
        </>
      )}
    </div>
  );
};

StaffSlot.propTypes = {
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

const range9 = [...Array(9).keys()];
const staffIds = {
  supertreble: range9.map((num) => num + 11).reverse(), // 11..19
  treble: range9.map((num) => num + 2).reverse(), // 2..10
  midrange: [1, 0, -1],
  bass: range9.map((num) => -(num + 2)),
  subbass: range9.map((num) => -(num + 11)),
};

const Staff = ({ clef, hasLines, toggleNote }) => {
  return (
    <div className={"staff"}>
      <Clef clef={clef} />
      {staffIds[clef].map((id) => (
        <StaffSlot
          clef={clef}
          id={id}
          type={
            hasLines
              ? (id + 1) % 2
                ? "staff-line"
                : "staff-space"
              : "staff-ledger-line"
          }
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
  activeAcc: PropTypes.number.isRequired,
  toggleNote: PropTypes.func,
};

Clef.propTypes = {
  clef: PropTypes.string.isRequired,
};

const GrandStaff = ({ toggleNote, activeAcc }) => (
  <div className={"grand-staff"}>
    <Staff
      clef={"supertreble"}
      toggleNote={toggleNote}
      hasLines={false}
      activeAcc={activeAcc}
    />
    <Staff
      clef={"treble"}
      toggleNote={toggleNote}
      hasLines={true}
      activeAcc={activeAcc}
    />
    <Staff
      clef={"midrange"}
      toggleNote={toggleNote}
      hasLines={false}
      activeAcc={activeAcc}
    />
    <Staff
      clef={"bass"}
      toggleNote={toggleNote}
      hasLines={true}
      activeAcc={activeAcc}
    />
    <Staff
      clef={"subbass"}
      toggleNote={toggleNote}
      hasLines={false}
      activeAcc={activeAcc}
    />
  </div>
);

GrandStaff.propTypes = {
  toggleNote: PropTypes.func,
  activeAcc: PropTypes.number.isRequired,
};

const ClickableGrandStaff = ({ noteList, toggleNote, activeAcc }) => (
  <div className={"clickable-staff"}>
    <NoteColumn noteList={noteList} toggleNote={toggleNote} />
    <GrandStaff toggleNote={toggleNote} activeAcc={activeAcc} />
  </div>
);

ClickableGrandStaff.propTypes = {
  noteList: PropTypes.array.isRequired,
  toggleNote: PropTypes.func.isRequired,
  activeAcc: PropTypes.number.isRequired,
  // synth: PropTypes.object,
};

export default ClickableGrandStaff;
