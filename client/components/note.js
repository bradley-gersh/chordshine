export default class Note {
  constructor(noteStr) {
    this.string = noteStr;
    this.diaPc = noteStr[0];
    this.accidental = isNaN(Number(noteStr[1])) ? noteStr[1] : "";
    this.octave = isNaN(Number(noteStr[1]))
      ? noteStr.slice(2)
      : noteStr.slice(1);
    this.midiNote = toMidi(this.diaPc, this.octave, this.accidental);
    this.vol = 100;
    this.noteCol = -1;
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
