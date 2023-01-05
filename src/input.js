import React from "react";

export const MyInput = (props) => {

    
  const inputStyle = {
    div: {
      padding: "10px",
      color: "white",
      fontFamily: "sans-serif",
      position: "fixed",
      bottom: "0",
      backgroundColor: "powderblue",
      width: "100%",
      marginLeft: "-8px",
    },

input:{
padding:"10px",
margin:"5px",
width:"65%",
},

button: {
  padding:"10px",
  width:"100px",
},



  };
  return (
    <div style={inputStyle.div}>
      <input style={inputStyle.input} type="text" placeholder="Write a message" id="message" />
      <button style={inputStyle.button} id="btn" onClick={props.input}>
        Send
      </button>
    </div>
  );
};