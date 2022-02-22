import React, { useState } from "react";
import PropTypes from "prop-types";

import useInterval from "./Interval";
import { ClickableGrandStaff, Note, Toolbar } from "./index";

const Editor = ({ synth }) => {
  const [noteList, setNoteList] = useState([]);
  const [noteGrid, setNoteGrid] = useState({});
  const [activeAcc, setActiveAcc] = useState(0);
  const [volumes, setVolumes] = useState([]);
  // https://tonejs.github.io/docs/14.7.77/Volume
  // see connecting an oscillator to the tone object
  // possibly in the _voices array
  const clearNoteList = () => {
    setNoteList([]);
    setNoteGrid({});
    synth.releaseAll();
  };

  useInterval(() => {
    if (synth) {
      synth._activeVoices.forEach((voice) => {
        voice.voice.volume.rampTo(Math.random() * 50 - 50, 1);
      });
    }
    // if (synth && volumes) {
    // volumes.forEach((vol, idx) => {
    // const newTime = Math.random();
    // const newVol = 120 * Math.random() - 100;
    // console.log(`${idx}: ${newVol}, ${newTime}`);
    // vol.volume.rampTo(newVol, newTime);
    // });
    // }
  }, 3000);

  const toggleNote = (noteStr) => {
    const newNote = new Note(noteStr, activeAcc);
    const loc = noteList.map((note) => note.string).indexOf(newNote.string);

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

      if (synth) {
        synth.triggerRelease(newNote.string);
        setVolumes([...volumes.slice(0, loc), ...volumes.slice(loc + 1)]);
        // console.log("note toggled off: " + noteList[loc].row);
      }
    } else {
      if (newNoteGrid[newNote.row]) {
        newNoteGrid[newNote.row].push(newNote.col);
      } else {
        newNoteGrid[newNote.row] = [newNote.col];
      }

      if (synth) {
        // console.log("note toggled on: " + newNote.row);
        synth.triggerAttack(newNote.string);
        // const newVol = new tonejs.Volume(-30);
        // console.log(synth._activeVoices[0].voice.volume.value);
        // synth._activeVoices[synth.activeVoices - 1].voice.volume.rampTo(-10, 3);
        // synth._availableVoices[-1].chain(newVol, tonejs.Master);
        const newVol = 0.2; // a placeholder
        setVolumes([...volumes, newVol]);
      }
    }

    setNoteGrid(newNoteGrid);
    // console.log(newNoteGrid);
  };

  return (
    <div className={"editor"}>
      <ClickableGrandStaff
        noteList={noteList}
        toggleNote={toggleNote}
        activeAcc={activeAcc}
        // synth={synth}
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
