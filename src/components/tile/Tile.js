import React from "react";

export const Tile = ({ name, description }) => {
  
  return (
    <div className="tile-container">
      <p className="tile-title title">{name}</p>
      {Object.values(description).map((value, index) => {
        return <p className="tile" key={index}>{value}</p>
      })}
    </div>
  );
};
