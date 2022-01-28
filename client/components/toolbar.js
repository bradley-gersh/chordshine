import React from "react";
import PropTypes from "prop-types";

import { Sharp, Natural, Flat } from "./icons";

const Toolbar = () => (
  <div>
    <RoundButton icon={"sharp"} />
    <RoundButton icon={"natural"} />
    <RoundButton icon={"flat"} />
  </div>
);

const RoundButton = ({ icon }) => (
  <button style={{ borderRadius: "10px" }}>
    {icon === "sharp" ? <Sharp /> : icon === "natural" ? <Natural /> : <Flat />}
  </button>
);

RoundButton.propTypes = {
  icon: PropTypes.string,
};

export default Toolbar;
