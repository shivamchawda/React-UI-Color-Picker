import React from "react";

const ShadeInput = (props) => {
  return (
    <div className="shade-search">
      <div className="search_here">SEARCH</div>
      <input
        type="text"
        className="shade-input"
        value={props.color}
        onChange={(e) => props.onInputChange(e.target.value)}
      />
      <div className="search_here">HERE</div>
    </div>
  );
};

export default ShadeInput;
