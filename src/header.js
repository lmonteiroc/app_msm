import React from "react";

export const MyHeader = (props) => {
  const headerStyle = {
    div: {
      padding: "10px",
      backgroundColor: "MediumSeaGreen",
      color: "white",
      margin: "-10px",
      fontFamily: "sans-serif",
      textAlign: "center",
    },
  };
  return (
    <div style={headerStyle.div}>
      <h3>{props.name}</h3>
    </div>
  );
};