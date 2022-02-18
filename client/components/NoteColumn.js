import React from "react";
import PropTypes from "prop-types";

import { Notehead } from "./Icons";

const C4 = 5;

const noteToGrid = (noteObj, noteList) => {
  // given a note string, returns the component
  // to add to the NoteColumn.
  // Stretch goal: Handle clusters nicely
  // Find how many notes on the line/space below are
  // in the same column
  // const sameDia = noteList.filter((note) => (note[0] === noteStr[0]) && );
  // if a pitchslot has two pitches already, do not accept a third.
  // if a pitch slot has two pitches, place them in slots 0 and 2.
  // if a pitch slot has one pitch, place it in slot 1.
  // if any pitch has a neighbor below, place it in the opposed slot. If no neighbor below, the left slot.
  // Consider putting this logic on each line.
  return (
    <Notehead
      style={{
        gridColumnStart: 2,
        gridRowStart: 3,
      }}
    />
  );
};

const NoteColumn = ({ noteList }) => {
  return (
    <div className={"note-column"}>
      {noteList.length > 0 ? (
        <>
          <Notehead row={11} col={3} />
          <Notehead row={13} col={3} />
          <Notehead row={12} col={3} alt={true} />
          <Notehead row={10} col={2} />
          <Notehead row={11} col={1} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

NoteColumn.propTypes = {
  noteList: PropTypes.array,
};

export default NoteColumn;
