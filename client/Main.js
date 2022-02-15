import React, { useState, useEffect } from "react";
import { Editor, SplashModal } from "./components/index";

const Main = () => {
  const [tonejs, setToneJs] = useState(undefined);
  const [synth, setSynth] = useState(undefined);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if (tonejs && !synth) {
      setSynth(new tonejs.PolySynth().toDestination());
    }
  });

  return (
    <div className={"main"}>
      <Editor synth={synth} />
      {modalVisible ? (
        <SplashModal setModalVisible={setModalVisible} setToneJs={setToneJs} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
