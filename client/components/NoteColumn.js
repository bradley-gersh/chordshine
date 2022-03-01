import React from "react";
import PropTypes from "prop-types";

// import { Notehead } from "./Icons";
import { NoteDisplay } from "./NoteDisplay";

const noteToGrid = (note, synth /*, noteList, noteGrid, toggleNote*/) => {
  // given a note string, returns the component
  // to add to the NoteColumn.
  // Stretch goal: Handle clusters nicely

  // const sameDia = noteList.filter((note) => (note[0] === noteStr[0]) && );
  // if a row has two pitches already, do not accept a third.
  // if a row has two pitches, place them in slots 0 and 2.
  // if a row slot has one pitch, place it in slot 1.
  // Neighbor below = one row higher, same column.
  // if any pitch has a neighbor below with alt===false, alt=true. Else alt=false.

  return <NoteDisplay note={note} key={note.string} synth={synth} />;
};

const NoteColumn = ({ noteList, synth }) => {
  return (
    <div className={"note-column"}>
      {noteList.map((note) => noteToGrid(note, synth))}
    </div>
  );
};

NoteColumn.propTypes = {
  noteList: PropTypes.array,
  synth: PropTypes.object,
  // noteGrid: PropTypes.object,
  // toggleNote: PropTypes.func,
};

export default NoteColumn;
