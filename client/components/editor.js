import React, { useState } from "react";
import PropTypes from "prop-types";

import useInterval from "./Interval";
import { ClickableGrandStaff, Note, Toolbar } from "./index";
import { MIN_VOL, RAMP_TIME_SEC, CHANGE_TIME_MSEC } from "./constants";

const Editor = ({ synth }) => {
  const [noteList, setNoteList] = useState([]);
  const [noteGrid, setNoteGrid] = useState({});
  const [highestLine, setHighestLine] = useState(Number.NEGATIVE_INFINITY);
  const [lowestLine, setLowestLine] = useState(Number.POSITIVE_INFINITY);
  const [middleC, setMiddleC] = useState(false);
  const [activeAcc, setActiveAcc] = useState(0);
  const [rampTime, setRampTime] = useState(400);
  const [changeTime, setChangeTime] = useState(400);

  const clearNoteList = () => {
    setNoteList([]);
    setNoteGrid({});
    setMiddleC(false);
    setHighestLine(Number.NEGATIVE_INFINITY);
    setLowestLine(Number.POSITIVE_INFINITY);
    synth.releaseAll();
  };

  useInterval(() => {
    if (synth) {
      synth._activeVoices.forEach((voice) => {
        voice.voice.volume.rampTo(
          Math.random() * Math.abs(MIN_VOL) + MIN_VOL,
          rampTime / 1000
        );
      });
    }
  }, changeTime);

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
    const C4row = -21;
    const lowestRow =
      -1 *
      (newNoteList.reduce(
        (max, note) => (note.row > max ? note.row : max),
        Number.NEGATIVE_INFINITY
      ) -
        C4row);

    const highestRow =
      -1 *
      (newNoteList.reduce(
        (min, note) => (note.row < min ? note.row : min),
        Number.POSITIVE_INFINITY
      ) -
        C4row);

    const middleCPresent =
      newNoteList.filter((note) => note.row === C4row).length > 0;

    setNoteList(newNoteList);
    setNoteGrid(newNoteGrid);
    setMiddleC(middleCPresent);
    setHighestLine(highestRow);
    setLowestLine(lowestRow);
  };

  return (
    <div className={"editor"}>
      <ClickableGrandStaff
        noteList={noteList}
        toggleNote={toggleNote}
        activeAcc={activeAcc}
        noteGrid={noteGrid}
        highestLine={highestLine}
        lowestLine={lowestLine}
        middleC={middleC}
      />
      <Toolbar
        activeAcc={activeAcc}
        setActiveAcc={setActiveAcc}
        clearNoteList={clearNoteList}
        rampTime={rampTime}
        changeTime={changeTime}
        setChangeTime={setChangeTime}
        setRampTime={setRampTime}
      />
    </div>
  );
};

Editor.propTypes = {
  synth: PropTypes.object,
};

export default Editor;
