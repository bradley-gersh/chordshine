import React, { useState } from "react";
import PropTypes from "prop-types";

import useInterval from "./Interval";
import { ClickableGrandStaff, Note, Toolbar } from "./index";
import { MIN_VOL, RAMP_TIME_SEC, CHANGE_TIME_MSEC } from "./constants";

const Editor = ({ synth }) => {
  const [noteList, setNoteList] = useState([]);
  const [noteGrid, setNoteGrid] = useState({});
  const [activeAcc, setActiveAcc] = useState(0);

  const clearNoteList = () => {
    setNoteList([]);
    setNoteGrid({});
    synth.releaseAll();
  };

  useInterval(() => {
    if (synth) {
      synth._activeVoices.forEach((voice) => {
        voice.voice.volume.rampTo(
          Math.random() * Math.abs(MIN_VOL) + MIN_VOL,
          RAMP_TIME_SEC
        );
      });
    }
  }, CHANGE_TIME_MSEC);

  const toggleNote = (noteStr) => {
    const newNote = new Note(noteStr, activeAcc);
    const loc = noteList.map((note) => note.string).indexOf(newNote.string);

    const newNoteList =
      loc > -1
        ? noteList.slice(0, loc).concat(noteList.slice(loc + 1))
        : [...noteList, newNote];

    const newNoteGrid = { ...noteGrid };

    if (loc > -1) {
      if (synth) {
        // console.log("note toggled off: " + noteList[loc].row);
        synth.triggerRelease(newNote.string);
      }

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
    } else {
      if (synth) {
        // console.log("note toggled on: " + newNote.row);
        synth.triggerAttack(newNote.string);
        // capture reference to new object
        // attach that reference to the Note object
        newNote.volume =
          synth._activeVoices[synth.activeVoices - 1].voice.volume;
      }

      if (newNoteGrid[newNote.row]) {
        newNoteGrid[newNote.row].push(newNote.col);
      } else {
        newNoteGrid[newNote.row] = [newNote.col];
      }
    }

    setNoteList(newNoteList);
    setNoteGrid(newNoteGrid);
  };

  return (
    <div className={"editor"}>
      <ClickableGrandStaff
        noteList={noteList}
        toggleNote={toggleNote}
        activeAcc={activeAcc}
      />
      <Toolbar
        activeAcc={activeAcc}
        setActiveAcc={setActiveAcc}
        clearNoteList={clearNoteList}
      />
    </div>
  );
};

Editor.propTypes = {
  synth: PropTypes.object,
};

export default Editor;
