import React from "react";
import { Staff } from "./staff";
import { Toolbar } from "./toolbar";

const NoteColumn = () => <div className={"note-column"}></div>;

const BigStaff = () => (
  <div className={"big-staff"}>
    <NoteColumn />
    <Staff clef={"supertreble"} hasLines={false} />
    <Staff clef={"treble"} hasLines={true} />
    <Staff clef={"midrange"} hasLines={false} />
    <Staff clef={"bass"} hasLines={true} />
    <Staff clef={"subbass"} hasLines={false} />
  </div>
);

const StaffBox = () => (
  <div className={"staff-box"}>
    <BigStaff />
    <Toolbar />
  </div>
);

export { StaffBox, BigStaff };
