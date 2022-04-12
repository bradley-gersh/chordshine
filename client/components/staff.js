import React, { useState } from "react";
import PropTypes from "prop-types";

import { Treble, Bass } from "./Icons.js";
import { MouseoverNote } from "./NoteDisplay.js";
import NoteColumn from "./NoteColumn.js";
import Note from "./Note.js";

// Hardcoded staff data

const clefs = ["supertreble", "treble", "midrange", "bass", "subbass"];

const noteRefs = {
  supertreble: ["G5", "A5", "B5", "C6", "D6", "E6", "F6", "G6", "A6"],
  treble: ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5"],
  midrange: ["B3", "C4", "D4"],
  bass: ["G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3"].reverse(),
  subbass: ["E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2", "F2"].reverse(),
};

const staffNoteRefs = Object.entries(noteRefs).reduce((acc, el) => {
  acc[el[0]] = el[1].map((note) => new Note(note));
  return acc;
}, {});

const staffIdOffsets = {
  supertreble: 11,
  treble: 2,
  midrange: -1,
  bass: -2,
  subbass: -11,
};

const range9 = [...Array(9).keys()];
const staffIds = {
  supertreble: range9.map((num) => num + staffIdOffsets.supertreble).reverse(), // 11..19
  treble: range9.map((num) => num + staffIdOffsets.treble).reverse(), // 2..10
  midrange: [1, 0, -1], // 1..-1
  bass: range9.map((num) => -num + staffIdOffsets.bass), //  -2..-10
  subbass: range9.map((num) => -num + staffIdOffsets.subbass), // -11..-19
};

// Staff components

const StaffLineUnit = ({ id, overId, activeAcc }) => {
  return (
    <div className={"staff-line-unit"}>
      <MouseoverNote activeAcc={activeAcc} visible={id === overId} />
    </div>
  );
};

StaffLineUnit.propTypes = {
  id: PropTypes.number,
  overId: PropTypes.number,
  activeAcc: PropTypes.number,
};

const StaffSpaceUnit = ({ id, overId, activeAcc }) => {
  return (
    <div className={"staff-space-unit"}>
      <MouseoverNote
        activeAcc={activeAcc}
        visible={id !== undefined && id === overId}
      />
    </div>
  );
};

StaffSpaceUnit.propTypes = {
  id: PropTypes.number,
  overId: PropTypes.number,
  activeAcc: PropTypes.number,
};

const StaffLedgerLineUnit = ({
  id,
  overId,
  activeAcc,
  highestLine,
  lowestLine,
  middleC,
}) => (
  <div className={"staff-ledger-line-unit"}>
    <div
      className={
        "ledger-line" +
        (id % 2 === 0 &&
        ((id === 0 && middleC === true) ||
          (id > 0 && highestLine >= id) ||
          (id < 0 && lowestLine <= id))
          ? " visible"
          : "")
      }
    ></div>
    <div
      className={
        "ledger-line-mouseover" +
        (id % 2 === 0 &&
        ((id === 0 && overId === 0) ||
          (id > 0 && overId >= id) ||
          (id < 0 && overId <= id))
          ? " visible"
          : "")
      }
    ></div>
    <MouseoverNote activeAcc={activeAcc} visible={id === overId} />
  </div>
);

StaffLedgerLineUnit.propTypes = {
  id: PropTypes.number,
  overId: PropTypes.number,
  activeAcc: PropTypes.number,
  highestLine: PropTypes.number,
  lowestLine: PropTypes.number,
  middleC: PropTypes.bool,
};

const StaffSlot = ({
  activeAcc,
  clef,
  id,
  type,
  toggleNote,
  overId,
  setOverId,
  highestLine,
  lowestLine,
  middleC,
}) => {
  const isNote = clef != undefined && id != undefined ? true : false;
  const note = !isNote
    ? undefined
    : clef === "supertreble" || clef === "treble" || clef == "midrange"
    ? staffNoteRefs[clef][id - staffIdOffsets[clef]]
    : staffNoteRefs[clef][-(id - staffIdOffsets[clef])];

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
        setOverId(id);
        // console.log(overId);
      }}
    >
      {type === "staff-line" ? (
        <>
          <StaffSpaceUnit />
          <StaffLineUnit activeAcc={activeAcc} id={id} overId={overId} />
          <StaffSpaceUnit />
        </>
      ) : type === "staff-ledger-line" ? (
        <>
          <StaffSpaceUnit />
          <StaffLedgerLineUnit
            activeAcc={activeAcc}
            id={id}
            overId={overId}
            highestLine={highestLine}
            lowestLine={lowestLine}
            middleC={middleC}
          />
          <StaffSpaceUnit />
        </>
      ) : (
        // type === "staff-space"
        <>
          <StaffSpaceUnit />
          <StaffSpaceUnit activeAcc={activeAcc} id={id} overId={overId} />
          <StaffSpaceUnit />
        </>
      )}
    </div>
  );
};

StaffSlot.propTypes = {
  activeAcc: PropTypes.number.isRequired,
  clef: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  overId: PropTypes.number,
  setOverId: PropTypes.func.isRequired,
  toggleNote: PropTypes.func,
  highestLine: PropTypes.number,
  lowestLine: PropTypes.number,
  middleC: PropTypes.bool,
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

const Staff = ({
  activeAcc,
  clef,
  hasLines,
  toggleNote,
  overId,
  setOverId,
  highestLine,
  lowestLine,
  middleC,
}) => {
  return (
    <div className={"staff"}>
      <Clef clef={clef} />
      {staffIds[clef].map((id) => (
        <StaffSlot
          activeAcc={activeAcc}
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
          overId={overId}
          setOverId={setOverId}
          key={id}
          highestLine={highestLine}
          lowestLine={lowestLine}
          middleC={middleC}
        />
      ))}
    </div>
  );
};

Staff.propTypes = {
  clef: PropTypes.string.isRequired,
  hasLines: PropTypes.bool.isRequired,
  activeAcc: PropTypes.number.isRequired,
  overId: PropTypes.number,
  setOverId: PropTypes.func.isRequired,
  toggleNote: PropTypes.func.isRequired,
  highestLine: PropTypes.number,
  lowestLine: PropTypes.number,
  middleC: PropTypes.bool,
};

Clef.propTypes = {
  clef: PropTypes.string.isRequired,
};

const GrandStaff = ({
  toggleNote,
  activeAcc,
  highestLine,
  lowestLine,
  middleC,
}) => {
  const [overId, setOverId] = useState(undefined);

  return (
    <div
      className={"grand-staff"}
      onMouseLeave={() => {
        setOverId(undefined);
      }}
    >
      {clefs.map((clefName, idx) => (
        <Staff
          key={clefName}
          clef={clefName}
          hasLines={!!(idx % 2)}
          toggleNote={toggleNote}
          activeAcc={activeAcc}
          overId={overId}
          setOverId={setOverId}
          highestLine={highestLine}
          lowestLine={lowestLine}
          middleC={middleC}
        />
      ))}
    </div>
  );
};

GrandStaff.propTypes = {
  toggleNote: PropTypes.func,
  activeAcc: PropTypes.number.isRequired,
  highestLine: PropTypes.number,
  lowestLine: PropTypes.number,
  middleC: PropTypes.bool,
};

const ClickableGrandStaff = ({
  noteList,
  toggleNote,
  activeAcc,
  noteGrid,
  highestLine,
  lowestLine,
  middleC,
}) => (
  <div className={"clickable-staff"}>
    <NoteColumn
      noteList={noteList}
      toggleNote={toggleNote}
      noteGrid={noteGrid}
    />
    <GrandStaff
      toggleNote={toggleNote}
      activeAcc={activeAcc}
      highestLine={highestLine}
      lowestLine={lowestLine}
      middleC={middleC}
    />
  </div>
);

ClickableGrandStaff.propTypes = {
  noteList: PropTypes.array.isRequired,
  noteGrid: PropTypes.object.isRequired,
  toggleNote: PropTypes.func.isRequired,
  activeAcc: PropTypes.number.isRequired,
  highestLine: PropTypes.number,
  lowestLine: PropTypes.number,
  middleC: PropTypes.bool,
  // synth: PropTypes.object,
};

export default ClickableGrandStaff;
