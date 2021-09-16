import React, { useState } from "react";
import "./styles.css";

var emoji_dic = {
  "😀": "Grinning Face",
  "🤣": "Rolling on the Floor Laughing",
  "🥰": "Smiling Face with Hearts",
  "😘": "Face Blowing a Kiss",
  "😛": "Face with Tongue",
  "🤔": "Thinking Face",
  "🤫": "Shushing Face",
  "🤧": "Sneezing Face",
  "🥶": "Cold Face",
  "😠": "Angry Face"
};

var imogi_we_know = Object.keys(emoji_dic);

export default function App() {
  var [output, setoutput] = useState("");
  function onchangehandler(event) {
    output = emoji_dic[event.target.value];
    if (output === undefined) {
      output = "We don't have that imogi Information";
    } else {
      output = "Meaning is " + output;
    }
    setoutput(output);
  }
  function onclickhandler(event) {
    output = emoji_dic[event];
    if (output === undefined) {
      output = "We don't have that imogi Information";
    } else {
      output = "Meaning is " + output;
    }
    setoutput(output);
  }
  return (
    <div className="App">
      <h1>Emogi Interpeter</h1>
      <input onChange={onchangehandler}></input>
      <h2>{output}</h2>
      {imogi_we_know.map(function (emoji) {
        return (
          <span
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
            onClick={() => onclickhandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
