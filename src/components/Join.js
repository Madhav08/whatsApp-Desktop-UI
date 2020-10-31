import React, { useState } from "react";
import "./Join.css";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="login">
      <div className="login__container"></div>
    </div>
  );
};

export default Join;
