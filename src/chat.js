import React from "react";

export const MyChat = (props) => {
  const chatStyle = {
    div: {
      padding: "10px",
      color: "black",
      fontFamily: "sans-serif",
      textAlign: "center",
      margin: "5px",
      overflow: "auto",
    },
    p: {
      padding: "10px",
      textAlign: "left",
      backgroundColor: "aquamarine",
      color: "black",
      borderRadius: "10px",
      float: "left",
    },
    ul: {
      listStyle: "none",
      float: "right",
    },
    li: {
      padding: "10px",
      width: "150px",
      backgroundColor: "DarkTurquoise",
      margin: "10px",
      color: "white",
      borderRadius: "10px",
      wordWrap: "break-word",
    },
  };
  return (
    <div id="chat" style={chatStyle.div}>
      <p style={chatStyle.p}>Hey! How is that React course going?</p>
      <ul style={chatStyle.ul}>
        {props.messages.map((message) => {
          return <li style={chatStyle.li}>{message}</li>;
        })}
      </ul>
    </div>
  );
};