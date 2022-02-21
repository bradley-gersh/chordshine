// import React, { useState } from "react";
// import PropTypes from "prop-types";

// import { Notehead } from "./Icons";

// const Note = ({ noteStr, noteList, noteGrid }) => {
//   return <Notehead row={row} col={col} alt={alt}></Notehead>;
// };

// Note.propTypes = {
//   noteStr: PropTypes.string.isRequired,
//   noteList: PropTypes.array,
//   noteGrid: PropTypes.object,
// };

export default class Note {
  constructor(noteStr, accidental) {
    console.log(accidental);
    this.string = noteStr;
    this.diaPc = noteStr[0];
    this.accidental = accidental ? accidental : 0;
    this.octave = isNaN(Number(noteStr[1]))
      ? noteStr.slice(2)
      : noteStr.slice(1);
    this.midiNote = toMidi(this.diaPc, this.octave, this.accidental);
    this.vol = 100;
    this.row = toNoteRow(this.diaPc, this.octave);
    this.col = 2;
    this.alt = false;
  }
}

function toNoteRow(diaPc, octave) {
  const C4row = -19;
  const fromC4 = 7 * (octave - 4) + diaNum(diaPc);

  return C4row - fromC4;
}

function toMidi(diaPc, octave, accidental) {
  return (octave + 1) * 12 + pcNum(diaPc) + accidental;
}

function diaNum(diaPc) {
  diaPc = diaPc.toUpperCase();
  switch (diaPc) {
    case "A":
      return 5;
    case "B":
      return 6;
    case "C":
      return 0;
    case "D":
      return 1;
    case "E":
      return 2;
    case "F":
      return 3;
    case "G":
      return 4;
  }
}

function pcNum(diaPc) {
  diaPc = diaPc.toUpperCase();
  switch (diaPc) {
    case "A":
      return 9;
    case "B":
      return 11;
    case "C":
      return 0;
    case "D":
      return 2;
    case "E":
      return 4;
    case "F":
      return 5;
    case "G":
      return 7;
  }
}
