import React, { useState } from "react";

import { ClickableGrandStaff, Toolbar } from "./index";

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
