import React, { useState, useEffect } from "react";
import { Editor, SplashModal } from "./components/index";

const Main = () => {
  const [tonejs, setToneJs] = useState(undefined);
  const [synth, setSynth] = useState(undefined);
  const [synthSettings, setSynthSettings] = useState(false);
  // const [vol, setVol] = useState(undefined);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if (tonejs && !synth) {
      setSynth(new tonejs.PolySynth().toDestination());
      // setVol(new tonejs.Volume(-40).toDestination());
    }
    if (synth && !synthSettings) {
      synth.volume.value = -6;
      synth.set({
        envelope: {
          attack: 0.1,
          attackCurve: "exponential",
          sustain: 0.2,
        },
      });
      setSynthSettings(true);
    }
  });

  return (
    <div className={"main"}>
      <h1>chordshine</h1>
      <Editor synth={synth} />
      {modalVisible ? (
        <SplashModal setModalVisible={setModalVisible} setToneJs={setToneJs} />
      ) : (
        <></>
      )}
      <span className={"attribution"}>
        Brad Gersh, 2021–22.{" "}
        <a href="https://github.com/bradley-gersh/chordbuild">Source.</a>
      </span>
    </div>
  );
};

export default Main;
