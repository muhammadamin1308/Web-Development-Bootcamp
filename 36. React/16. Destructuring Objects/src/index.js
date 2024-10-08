// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: teslaTopSpeed },
  colorsByPopularity: [teslaTopColor],
} = tesla;
const {
  speedStats: { topSpeed: hondaTopSpeed },
  colorsByPopularity: [hondaTopColor],
} = honda;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColor}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// const { name, sound) } = cat;
// const { name: catName, sound: catSound } = cat;
// const { name = "Fluffy", sound = "Purr" } = cat;
// const {
//   feedingRequirements: { food, water },
// } = cat;
// console.tog(food);
