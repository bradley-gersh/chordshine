import React, { useState } from "react";
import * as Tone from "tone";

import { ClickableGrandStaff, Toolbar } from "./index";

console.log("fire!");
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

const Editor = () => {
  const [noteList, setNoteList] = useState([]);
  const [soundStarted, setSoundStarted] = useState(false);

  const toggleNote = async (noteStr) => {
    if (!soundStarted) {
      setSoundStarted(true);
      await Tone.start();
    }

    const loc = noteList.indexOf(noteStr);
    const newNoteList =
      loc > -1
        ? noteList.slice(0, loc).concat(noteList.slice(loc + 1))
        : [...noteList, noteStr];
    setNoteList(newNoteList);

    if (loc > -1) {
      synth.triggerRelease(noteStr);
      console.log("note toggled off: " + noteStr);
    } else {
      synth.triggerAttack(noteStr);
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

export default Editor;
