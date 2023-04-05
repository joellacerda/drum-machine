import React, { useState, useEffect } from "react";

const DrumMachine = () => {
  const [display, setDisplay] = useState("Press a key");

  const drumPads = [
    {
      id: "Heater-1",
      key: "Q",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "Heater-2",
      key: "W",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "Heater-3",
      key: "E",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "Heater-4",
      key: "A",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "Clap",
      key: "S",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "Open-HH",
      key: "D",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "Kick-n'-Hat",
      key: "Z",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "Kick",
      key: "X",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "Closed-HH",
      key: "C",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const playAudio = (audioId) => {
    const audio = document.getElementById(audioId);
    audio.currentTime = 0;
    audio.play();
    const drumPad = drumPads.find((drumPad) => drumPad.key === audioId);
    setDisplay(drumPad.id);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const drumPad = drumPads.find(
        (drumPad) => drumPad.key === e.key.toUpperCase()
      );
      if (drumPad) {
        playAudio(drumPad.key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div id="display">{display}</div>
        {drumPads.map((drumPad) => (
          <button
            className="drum-pad"
            id={drumPad.id}
            key={drumPad.id}
            onClick={() => playAudio(drumPad.key)}
          >
            {drumPad.key}
            <audio className="clip" id={drumPad.key} src={drumPad.url} />
          </button>
        ))}
      </div>
    </>
  );
};

export default DrumMachine;
