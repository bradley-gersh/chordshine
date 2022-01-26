import React from "react";
import { Staff, Gap } from "./staff";

const BigStaff = () => (
  <div className={"staff-box"}>
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
  </div>
);

export default BigStaff;
