//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

const d = new Date();
let hour = d.getHours();

const greeting = {
  morning: "Good morning!",
  afternoon: "Good afternoon!",
  night: "Good night!",
};
let style = {
  color: "red",
};
let time = "";
if (hour < 12 && hour > 0) {
  time = greeting.morning;
} else if (hour >= 12 && hour < 18) {
  time = greeting.afternoon;
  style.color = "green";
} else {
  time = greeting.night;
  style.color = "blue";
}

ReactDom.render(
  <div>
    <h1 style={style}>{time}</h1>
  </div>,
  document.getElementById("root")
);
