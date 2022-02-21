import React from "react";
import PropTypes from "prop-types";

const SplashModal = ({ setModalVisible, setToneJs }) => {
  return (
    <div className={"splash-modal"}>
      <div className={"text"}>
        This modal is necessary to load the audio component.
      </div>
      <button
        onClick={async () => {
          const tempTone = await import("tone");
          await tempTone.start();
          setToneJs(tempTone);
          // console.log("tone started");
          setModalVisible(false);
        }}
      >
        Click me to start!
      </button>
    </div>
  );
};

SplashModal.propTypes = {
  Tone: PropTypes.object,
  setModalVisible: PropTypes.func,
  setToneJs: PropTypes.func,
};

export default SplashModal;
