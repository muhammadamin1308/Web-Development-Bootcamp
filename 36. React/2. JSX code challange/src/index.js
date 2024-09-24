import React from "react";
import ReactDom from "react-dom";
const name = "Muhammadamin";
// let luckyNum = Math.floor(Math.random() * 10);
const d = new Date();
let year = d.getFullYear();

ReactDom.render(
  <div>
    <h1>Created by {name}</h1>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
