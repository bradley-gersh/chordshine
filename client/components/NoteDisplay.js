import React, { useState } from "react";
import PropTypes from "prop-types";

import { default as useInterval } from "./Interval.js";
import { NoteheadIcon, Flat, Natural, Sharp } from "./Icons";

const Notehead = ({ row, col, alt, fillColor }) => {
  const style = {
    position: "relative",
    alignSelf: "center",
    gridColumnStart: col,
    gridRowStart: row,
    top: "-2px",
  };

  if (alt) {
    style["left"] = "14px";
  }

  return (
    <div className={"staff-glyph"} style={style}>
      <NoteheadIcon fillColor={fillColor} />
    </div>
  );
};

Notehead.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  alt: PropTypes.bool,
  fillColor: PropTypes.string,
};

const Accidental = ({ type, row, col, alt, fillColor }) => {
  const style = {
    position: "relative",
    alignSelf: "center",
    gridColumnStart: col,
    gridRowStart: row,
    top: "-5px",
    left: "-25px",
  };

  if (type === -1) {
    style.top = "-8px";
  }

  if (alt) {
    style["left"] = "14px";
  }

  return (
    <div style={style}>
      {type === -1 ? (
        <Flat className="staff-glyph" fillColor={fillColor} />
      ) : type === 1 ? (
        <Sharp className="staff-glyph" fillColor={fillColor} />
      ) : (
        <Natural className="staff-glyph" fillColor={fillColor} />
      )}
    </div>
  );
};

Accidental.propTypes = {
  type: PropTypes.number,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  alt: PropTypes.bool,
  fillColor: PropTypes.string,
};

const NoteDisplay = ({ note, synth }) => {
  const [colorR, setColorR] = useState(0);

  useInterval(() => {
    setColorR(colorR + 0.04);
  }, 15);

  return (
    <>
      <Accidental
        type={note.accidental}
        row={note.row}
        col={note.col}
        alt={note.alt}
        fillColor={`rgb(${255 * Math.abs(Math.sin(colorR + 0.01))}, 0, 0)`}
      />
      <Notehead
        row={note.row}
        col={note.col}
        alt={note.alt}
        fillColor={`rgb(${255 * Math.abs(Math.sin(colorR + 0.01))}, 0, 0)`}
      />
    </>
  );
};

NoteDisplay.propTypes = {
  note: PropTypes.object,
  synth: PropTypes.object,
};

export default NoteDisplay;
