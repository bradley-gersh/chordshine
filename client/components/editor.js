import React, { useState } from "react";
import PropTypes from "prop-types";

import { GrandStaff, Toolbar } from "./index";

const NoteColumn = () => <div className={"note-column"}></div>;

const ClickableGrandStaff = ({ noteList, toggleNote }) => (
  <div className={"clickable-staff"}>
    <NoteColumn noteList={noteList} />
    <GrandStaff toggleNote={toggleNote} />
  </div>
);

ClickableGrandStaff.propTypes = {
  noteList: PropTypes.array.isRequired,
  toggleNote: PropTypes.func.isRequired,
};

const Editor = () => {
  const [noteList, setNoteList] = useState([]);

  const toggleNote = (noteStr) => {
    const loc = noteList.indexOf(noteStr);
    const newNoteList =
      loc > -1
        ? noteList.slice(0, loc).concat(noteList.slice(loc + 1))
        : [...noteList, noteStr];
    setNoteList(newNoteList);
    console.log("note toggled: " + noteStr);
  };

  return (
    <div className={"editor"}>
      <ClickableGrandStaff noteList={noteList} toggleNote={toggleNote} />
      <Toolbar />
    </div>
  );
};

export default Editor;
