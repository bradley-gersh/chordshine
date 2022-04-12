import React from "react";
import PropTypes from "prop-types";

const SplashModal = ({ setModalVisible, setToneJs }) => {
  return (
    <div className={"splash-modal"}>
      <div className={"text"}>
        <p>This toy can help you explore the subsets of a sonority.</p>
        <p>Click the staff to add pitches.</p>
        <p>
          Use the sliders to change the smoothness and speed of the shimmer.
        </p>
      </div>
      <button
        onClick={async () => {
          const tempTone = await import("tone");
          await tempTone.start();
          setToneJs(tempTone);
          setModalVisible(false);
        }}
      >
        Click to start
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
