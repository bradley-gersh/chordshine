export default class Note {
  constructor(pc, octave, accidental) {
    this.pc = pc;
    this.octave = octave;
    this.accidental = accidental;
    this.midiNote = toMidi(pc, octave, accidental);
    this.vol = 100;
  }
}

function toMidi(pc, octave, accidental) {
  return (octave + 1) * 12 + pc + accidental;
}
