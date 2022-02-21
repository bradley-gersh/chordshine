import React, { useState } from "react";
import PropTypes from "prop-types";

import { ClickableGrandStaff, Note, Toolbar } from "./index";

const Editor = ({ synth }) => {
  const [noteList, setNoteList] = useState([]);
  const [noteGrid, setNoteGrid] = useState({});
  const [activeAcc, setActiveAcc] = useState(0);

  const toggleNote = (noteStr) => {
    const loc = noteList.map((note) => note.string).indexOf(noteStr);
    console.log(activeAcc);
    const newNote = new Note(noteStr, activeAcc);

    const newNoteList =
      loc > -1
        ? noteList.slice(0, loc).concat(noteList.slice(loc + 1))
        : [...noteList, newNote];
    setNoteList(newNoteList);

    const newNoteGrid = { ...noteGrid };

    if (loc > -1) {
      const oldNote = noteList[loc];
      const oldNoteRow = newNoteGrid[oldNote.row];
      if (oldNoteRow.length === 1) {
        delete newNoteGrid[oldNote.row];
      } else {
        const colLoc = oldNoteRow.indexOf(oldNote.col);
        newNoteGrid[oldNote.row] = [
          oldNoteRow.slice(0, colLoc),
          oldNoteRow.slice(colLoc + 1),
        ];
      }
      if (synth) synth.triggerRelease(noteStr);
      console.log("note toggled off: " + noteList[loc].row);
    } else {
      if (newNoteGrid[newNote.row]) {
        newNoteGrid[newNote.row].push(newNote.col);
      } else {
        newNoteGrid[newNote.row] = [newNote.col];
      }

      if (synth) synth.triggerAttack(noteStr);
      console.log("note toggled on: " + newNote.row);
    }

    setNoteGrid(newNoteGrid);
    console.log(newNoteGrid);
  };

  return (
    <div className={"editor"}>
      <ClickableGrandStaff
        noteList={noteList}
        toggleNote={toggleNote}
        activeAcc={activeAcc}
      />
      <Toolbar activeAcc={activeAcc} setActiveAcc={setActiveAcc} />
    </div>
  );
};

Editor.propTypes = {
  synth: PropTypes.object,
};

export default Editor;
