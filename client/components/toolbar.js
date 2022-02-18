import React from "react";
import PropTypes from "prop-types";

import { Sharp, Natural, Flat, Notehead } from "./Icons";

const Toolbar = () => (
  <div className={"toolbar"}>
    <RoundButton icon={"sharp"} />
    <RoundButton icon={"natural"} />
    <RoundButton icon={"flat"} />
  </div>
);

const RoundButton = ({ icon }) => (
  <button className={"accidental-button"}>
    {icon === "sharp" ? (
      <Sharp className={"accidental-on-button"} />
    ) : icon === "natural" ? (
      <Natural className={"accidental-on-button"} />
    ) : (
      <Flat className={"accidental-on-button"} />
    )}
  </button>
);

RoundButton.propTypes = {
  icon: PropTypes.string,
};

export default Toolbar;
