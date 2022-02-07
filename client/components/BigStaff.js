import React, { useState } from "react";
import PropTypes from "prop-types";
import { TrebleStaff, BassStaff, Gap, NoteColumn, Toolbar } from "./index";

const BigStaff = ({ notes, setNotes }) => (
  <div className={"big-staff"}>
    <NoteColumn />
    <Gap notes={notes} setNotes={setNotes} />
    <Gap notes={notes} setNotes={setNotes} />
    <Gap notes={notes} setNotes={setNotes} />
    <TrebleStaff clef={"treble"} notes={notes} setNotes={setNotes} />
    <Gap notes={notes} setNotes={setNotes} />
    <BassStaff clef={"bass"} notes={notes} setNotes={setNotes} />
    <Gap notes={notes} setNotes={setNotes} />
    <Gap notes={notes} setNotes={setNotes} />
    <Gap notes={notes} setNotes={setNotes} />
  </div>
);

BigStaff.propTypes = {
  notes: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
};

const StaffBox = () => {
  const [notes, setNotes] = useState([]);

  return (
    <div className={"staff-box"}>
      <BigStaff notes={notes} setNotes={setNotes} />
      <Toolbar />
    </div>
  );
};

export { StaffBox, BigStaff };
