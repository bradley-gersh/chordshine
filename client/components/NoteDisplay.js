import React, { useState } from "react";
import PropTypes from "prop-types";

import { default as useInterval } from "./interval.js";
import { AccidentalIcon, NoteheadIcon } from "./icons.js";
import { MIN_VOL } from "./constants.js";

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

const MouseoverNote = ({ activeAcc, visible }) => {
  const style = {
    position: "absolute",
    display: "flex",
    top: "-1.255rem", // -4.5
    left: "3rem",
    zIndex: "1",
    width: "5rem",
    pointerEvents: "none",
  };

  return (
    <div className={"staff-glyph"} style={style}>
      {visible === true ? (
        <>
          <AccidentalIcon fillColor="gray" scale={0.035} type={activeAcc} />
          <NoteheadIcon fillColor="gray" scale={0.012} yShift={6.7} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

MouseoverNote.propTypes = {
  activeAcc: PropTypes.number,
  visible: PropTypes.bool,
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
    style["left"] = "-40px";
  }

  return (
    <div style={style}>
      <AccidentalIcon
        className={"staff-glyph"}
        fillColor={fillColor}
        type={type}
      />
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

const NoteDisplay = ({ note }) => {
  const [color, setColor] = useState(0);

  useInterval(() => {
    const colorParam = (255 * (note.volume.value - MIN_VOL)) / -MIN_VOL;
    setColor(colorParam);
  }, 15);

  return (
    <>
      {note.showAcc ? (
        <Accidental
          type={note.accidental}
          row={note.row}
          col={note.col}
          alt={note.alt}
          fillColor={`rgb(${color / 4}, ${color}, ${color})`}
        />
      ) : (
        <></>
      )}
      <Notehead
        row={note.row}
        col={note.col}
        alt={note.alt}
        fillColor={`rgb(${color / 4}, ${color}, ${color})`}
      />
    </>
  );
};

NoteDisplay.propTypes = {
  note: PropTypes.object,
};

export { NoteDisplay, MouseoverNote };
