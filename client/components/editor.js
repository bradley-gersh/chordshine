import React, { useState, useEffect } from "react";

import { ClickableGrandStaff, Toolbar } from "./index";

let Tone;

const Editor = () => {
  const [noteList, setNoteList] = useState([]);
  const [synth, setSynth] = useState(undefined);

  const toggleNote = async (noteStr) => {
    if (!synth) {
      import("react");
      Tone = await import("tone");
      await Tone.start();
      setSynth(new Tone.PolySynth(Tone.Synth).toDestination());
    }

    const loc = noteList.indexOf(noteStr);
    const newNoteList =
      loc > -1
        ? noteList.slice(0, loc).concat(noteList.slice(loc + 1))
        : [...noteList, noteStr];
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

export default Editor;
