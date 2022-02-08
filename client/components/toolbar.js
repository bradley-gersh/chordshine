import React from "react";
import PropTypes from "prop-types";

import { Sharp, Natural, Flat } from "./icons";

const Toolbar = () => (
  <div className={"toolbar"}>
    <RoundButton icon={"sharp"} />
    <RoundButton icon={"natural"} />
    <RoundButton icon={"flat"} />
  </div>
);

const RoundButton = ({ icon }) => (
  <button className={"accidental-button"}>
    {icon === "sharp" ? <Sharp /> : icon === "natural" ? <Natural /> : <Flat />}
  </button>
);

RoundButton.propTypes = {
  icon: PropTypes.string,
};

export { Toolbar };
