import React, { useState, useEffect, useRef } from "react";
import Values from "values.js";
import isColor from "is-color";
import Shade from "./Shade";

const Shades = ({ color }) => {
  const audioRef = useRef();

  const [shades, setShades] = useState([]);

  useEffect(() => {
    if (isColor(color)) {
      createShades();
    }
  }, [color]);

  const createShades = () => {
    const shades_color = new Values(color);
    const shades = shades_color.shades(1);
    setShades(shades);
    console.log(shades);
  };

  const onColorCopy = () => {
    audioRef.current.play();
  };

  return (
    <div className="shades">
      <audio ref={audioRef} src={require("../assets/click-sound.mp3")} />
      {shades.map((shade) => (
        <Shade shade={shade} onColorCopy={onColorCopy} />
      ))}
    </div>
  );
};

export default Shades;
