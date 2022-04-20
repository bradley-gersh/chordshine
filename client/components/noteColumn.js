import React from "react";
import PropTypes from "prop-types";

// import { Notehead } from "./Icons";
import { NoteDisplay } from "./noteDisplay.js";

const noteToGrid = (note, synth, noteList, noteGrid /*, toggleNote*/) => {
  // given a note string, returns the component
  // to add to the NoteColumn.

  // 1. Get the list of notes on the same diatonic line.
  const sameLine = noteGrid[note.row];
  const lowerLine = noteGrid[note.row + 1] ?? [];
  const neighborBelowIndexes = lowerLine.filter((col) => col === note.col);
  if (neighborBelowIndexes.length === 1) {
    const neighborBelow = noteList.filter(
      (testNote) =>
        testNote.col === neighborBelowIndexes[0] &&
        testNote.row === note.row + 1
    )[0];
    if (neighborBelow.alt === false) {
      note.alt = true;
    } else {
      note.alt = false;
    }
  } else if (neighborBelowIndexes.length > 1) {
    console.log("WARNING: Too many lower neighbors." + neighborBelowIndexes);
  }
  // 2. Checks:
  // if a row has two pitches already, do not accept a third.
  // if a row has two pitches, place them in slots 0 and 2.
  if (sameLine.length === 1) {
    if (note.col !== 2) {
      note.col = 2;
    }
    if (note.accidental === 0) {
      note.showAcc = false;
    }
  } else if (sameLine.length > 1) {
    note.showAcc = true;
    // update noteGrid using setNoteGrid here
  }
  // For now, do not handle the following case.
  // else if (sameLine.length > 1) {
  // const sameLineNotes = noteList.filter(
  //   (testNote) => testNote.row === note.row
  // );
  // sameLineNotes.sort((noteA, noteB) => noteA.accidental - noteB.accidental);
  // sameLineNotes[0].col = 1;
  // if (sameLine.length === 2) {
  //   sameLineNotes[1].col = 3;
  // } else if (sameLine.length === 3) {
  //   sameLineNotes[1].col = 2;
  //   sameLineNotes[2].col = 3;
  // }
  // console.log(sameLineNotes);
  // update noteGrid using setNoteGrid here
  // }
  // if a row slot has one pitch, place it in slot 1.

  // Neighbor below = one row higher, same column.
  // if any pitch has a neighbor below with alt===false, alt=true. Else alt=false.

  return <NoteDisplay note={note} key={note.string} synth={synth} />;
};

const NoteColumn = ({ noteList, synth, noteGrid }) => {
  return (
    <div className={"note-column"}>
      {noteList.map((note) => noteToGrid(note, synth, noteList, noteGrid))}
    </div>
  );
};

NoteColumn.propTypes = {
  noteList: PropTypes.array,
  synth: PropTypes.object,
  noteGrid: PropTypes.object,
  // toggleNote: PropTypes.func,
};

export default NoteColumn;
