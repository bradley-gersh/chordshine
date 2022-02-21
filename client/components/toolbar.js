import React from "react";
import PropTypes from "prop-types";

import { Sharp, Natural, Flat } from "./Icons";

const Toolbar = ({ activeAcc, setActiveAcc }) => {
  return (
    <div className={"toolbar"}>
      <RoundButton
        icon={"sharp"}
        activeAcc={activeAcc}
        setActiveAcc={setActiveAcc}
      />
      <RoundButton
        icon={"natural"}
        activeAcc={activeAcc}
        setActiveAcc={setActiveAcc}
      />
      <RoundButton
        icon={"flat"}
        activeAcc={activeAcc}
        setActiveAcc={setActiveAcc}
      />
    </div>
  );
};

Toolbar.propTypes = {
  activeAcc: PropTypes.number.isRequired,
  setActiveAcc: PropTypes.func.isRequired,
};

const activeAccToIcon = (activeAcc) => {
  if (activeAcc === -1) {
    return "flat";
  } else if (activeAcc == 0) {
    return "natural";
  } else if (activeAcc == 1) {
    return "sharp";
  } else {
    console.error("Invalid accidental type.");
  }
};

const iconToActiveAcc = (icon) => {
  if (icon === "flat") {
    return -1;
  } else if (icon === "natural") {
    return 0;
  } else if (icon === "sharp") {
    return 1;
  } else {
    console.error("Invalid accidental type.");
  }
};

const RoundButton = ({ icon, activeAcc, setActiveAcc }) => {
  return (
    <button
      className={
        "accidental-button" +
        (activeAccToIcon(activeAcc) === icon ? " active" : "")
      }
      onClick={() => {
        setActiveAcc(iconToActiveAcc(icon));
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
  activeAcc: PropTypes.number,
  setActiveAcc: PropTypes.func,
};

export default Toolbar;
