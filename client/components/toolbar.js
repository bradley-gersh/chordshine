import React from "react";
import PropTypes from "prop-types";

import { Sharp, Natural, Flat } from "./Icons";

const Toolbar = ({
  activeAcc,
  setActiveAcc,
  clearNoteList,
  changeTime,
  setChangeTime,
  rampTime,
  setRampTime,
}) => {
  return (
    <div className={"toolbar"}>
      <div className={"toolbar-row"}>
        <AccidentalButton
          icon={"sharp"}
          activeAcc={activeAcc}
          setActiveAcc={setActiveAcc}
        />
        <AccidentalButton
          icon={"natural"}
          activeAcc={activeAcc}
          setActiveAcc={setActiveAcc}
        />
        <AccidentalButton
          icon={"flat"}
          activeAcc={activeAcc}
          setActiveAcc={setActiveAcc}
        />
      </div>
      <div className={"sliders"}>
        <RampTimeSlider rampTime={rampTime} setRampTime={setRampTime} />
        <FlickerRateSlider
          changeTime={changeTime}
          setChangeTime={setChangeTime}
        />
      </div>
      <div className={"toolbar-row"}>
        <ClearButton clearNoteList={clearNoteList} />
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  activeAcc: PropTypes.number.isRequired,
  setActiveAcc: PropTypes.func.isRequired,
  clearNoteList: PropTypes.func.isRequired,
  rampTime: PropTypes.number.isRequired,
  setRampTime: PropTypes.func.isRequired,
  changeTime: PropTypes.number.isRequired,
  setChangeTime: PropTypes.func.isRequired,
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

const AccidentalButton = ({ icon, activeAcc, setActiveAcc }) => {
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

AccidentalButton.propTypes = {
  icon: PropTypes.string,
  activeAcc: PropTypes.number,
  setActiveAcc: PropTypes.func,
};

const ClearButton = ({ clearNoteList }) => {
  return (
    <button className={"clear-button"} onClick={clearNoteList}>
      Clear
    </button>
  );
};

ClearButton.propTypes = {
  clearNoteList: PropTypes.func,
};

const RampTimeSlider = ({ rampTime, setRampTime }) => (
  <div className="labeled-slider">
    <label>Abruptness</label>
    <input
      className="slider"
      type="range"
      min={-1000}
      max={-50}
      value={-rampTime}
      onChange={(e) => {
        setRampTime(-e.target.valueAsNumber);
      }}
    ></input>
  </div>
);

RampTimeSlider.propTypes = {
  rampTime: PropTypes.number.isRequired,
  setRampTime: PropTypes.func.isRequired,
};

const FlickerRateSlider = ({ changeTime, setChangeTime }) => (
  <div className="labeled-slider">
    <label>Rate</label>
    <input
      className="slider"
      type="range"
      min={-5000}
      max={-50}
      value={-changeTime}
      onChange={(e) => {
        setChangeTime(-e.target.valueAsNumber);
      }}
    ></input>
  </div>
);

FlickerRateSlider.propTypes = {
  changeTime: PropTypes.number.isRequired,
  setChangeTime: PropTypes.func.isRequired,
};

export default Toolbar;
