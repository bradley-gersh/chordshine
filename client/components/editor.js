import React from "react";
import { GrandStaff, Toolbar } from "./index";

const NoteColumn = () => <div className={"note-column"}></div>;

const ClickableGrandStaff = () => (
  <div className={"clickable-staff"}>
    <NoteColumn />
    <GrandStaff />
  </div>
);

const Editor = () => (
  <div className={"editor"}>
    <ClickableGrandStaff />
    <Toolbar />
  </div>
);

export default Editor;
