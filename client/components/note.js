export default class Note {
  constructor(noteStr, accidental) {
    this.string = toNoteString(noteStr, accidental);
    this.diaPc = noteStr[0];
    this.accidental = accidental ? accidental : 0;
    this.octave = isNaN(Number(noteStr[1]))
      ? noteStr.slice(2)
      : noteStr.slice(1);
    this.midiNote = toMidi(this.diaPc, this.octave, this.accidental);
    this.volume = undefined;
    this.row = toNoteRow(this.diaPc, this.octave);
    this.col = 2;
    this.alt = false;
  }
}

function toNoteString(noteStr, accidental) {
  if (accidental === undefined || accidental === 0) {
    return noteStr;
  } else if (accidental === -1) {
    return noteStr[0] + "b" + noteStr[1];
  } else if (accidental === 1) {
    return noteStr[0] + "#" + noteStr[1];
  } else {
    console.error("Invalid note string: " + accidental + noteStr);
  }
}

function toNoteRow(diaPc, octave) {
  const C4row = -21;
  const fromC4 = 7 * (octave - 4) + diaNum(diaPc);
  console.log(C4row - fromC4);
  console.log(octave, diaPc);

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
