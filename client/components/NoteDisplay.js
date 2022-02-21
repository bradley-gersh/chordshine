import React from "react";
import PropTypes from "prop-types";

import { NoteheadIcon, Flat, Natural, Sharp } from "./Icons";

const Notehead = ({ row, col, alt }) => {
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
    <div style={style}>
      <NoteheadIcon />
    </div>
  );
};

Notehead.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  alt: PropTypes.bool,
};

const Accidental = ({ type, row, col, alt }) => {
  const style = {
    position: "relative",
    alignSelf: "center",
    gridColumnStart: col,
    gridRowStart: row,
    top: "-7px",
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
        <Flat className={"accidental-staff"} />
      ) : type === 1 ? (
        <Sharp className={"accidental-staff"} />
      ) : (
        <Natural className={"accidental-staff"} />
      )}
    </div>
  );
};

Accidental.propTypes = {
  type: PropTypes.number,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  alt: PropTypes.bool,
};

const NoteDisplay = ({ note }) => {
  return (
    <>
      <Accidental
        type={note.accidental}
        row={note.row}
        col={note.col}
        alt={note.alt}
      />
      <Notehead row={note.row} col={note.col} alt={note.alt} />{" "}
    </>
  );
};

NoteDisplay.propTypes = {
  note: PropTypes.object,
};

export default NoteDisplay;
