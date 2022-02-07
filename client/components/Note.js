import React from "react";

const Note = () => <div className={"note"}></div>;

export default class Note {
  constructor(noteName) {
    this.id = noteName;
    this.pc = noteName[0];
    this.accidental = noteName[1];
    this.octave = noteName.slice(2);
    this.midiNote = toMidi(this.pc, this.octave, this.accidental);
    this.vol = 100;
  }
}

function toMidi(pc, octave, accidental) {
  function pcNum(pc) {
    pc = pc.toUpperCase;
    switch (pc) {
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
  return (octave + 1) * 12 + pcNum(pc) + accidental;
}

export { Note };
