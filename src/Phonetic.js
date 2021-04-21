import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span> {props.phonetic.text} </span>
      <ReactAudioPlayer
        className="React-audio-player"
        src={props.phonetic.audio}
        autoPlay={false}
        controls
      />
    </div>
  );
}
