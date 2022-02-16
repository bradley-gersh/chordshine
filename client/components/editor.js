import React, { useState } from "react";
import PropTypes from "prop-types";

import { ClickableGrandStaff, Note, Toolbar } from "./index";

const Editor = ({ synth }) => {
  const [noteList, setNoteList] = useState([]);

  const toggleNote = (noteStr) => {
    const loc = noteList.map((note) => note.string).indexOf(noteStr);
    const newNoteList =
      loc > -1
        ? noteList.slice(0, loc).concat(noteList.slice(loc + 1))
        : [...noteList, new Note(noteStr)];
    setNoteList(newNoteList);

    if (loc > -1) {
      if (synth) synth.triggerRelease(noteStr);
      console.log("note toggled off: " + noteStr);
    } else {
      if (synth) synth.triggerAttack(noteStr);
      console.log("note toggled on: " + noteStr);
    }
  };

  return (
    <div className={"editor"}>
      <ClickableGrandStaff noteList={noteList} toggleNote={toggleNote} />
      <Toolbar />
    </div>
  );
};

Editor.propTypes = {
  synth: PropTypes.object,
};

export default Editor;
