import React from "react";
import { Staff, Gap } from "./staff";
import { Toolbar } from "./toolbar";

const BigStaff = () => (
  <div className={"big-staff"}>
    <Gap />
    <Gap />
    <Gap />
    <Staff clef={"treble"} />
    <Gap />
    <Staff clef={"bass"} />
    <Gap />
    <Gap />
    <Gap />
  </div>
);

const StaffBox = () => (
  <div className={"staff-box"}>
    <BigStaff />
    <Toolbar />
  </div>
);

export { StaffBox, BigStaff };
