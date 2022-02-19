import React, { useState } from "react";
import PropTypes from "prop-types";

import { Sharp, Natural, Flat } from "./Icons";

const Toolbar = () => {
  const [active, setActive] = useState("");

  return (
    <div className={"toolbar"}>
      <RoundButton icon={"sharp"} active={active} setActive={setActive} />
      <RoundButton icon={"natural"} active={active} setActive={setActive} />
      <RoundButton icon={"flat"} active={active} setActive={setActive} />
    </div>
  );
};

const RoundButton = ({ icon, active, setActive }) => {
  return (
    <button
      className={"accidental-button" + (active === icon ? " active" : "")}
      onClick={() => {
        setActive(icon);
      }}
    >
      {icon === "sharp" ? (
        <Sharp className={"accidental-on-button"} />
      ) : icon === "natural" ? (
        <Natural className={"accidental-on-button"} />
      ) : (
        <Flat className={"accidental-on-button"} />
      )}
    </button>
  );
};

RoundButton.propTypes = {
  icon: PropTypes.string,
  active: PropTypes.string,
  setActive: PropTypes.func,
};

export default Toolbar;
