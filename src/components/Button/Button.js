import React from "react";
import "./Button.css";

export default function Button({ onClick, message, id }) {
  return (
    <button id={id} onClick={onClick}>
      {message}
    </button>
  );
}
