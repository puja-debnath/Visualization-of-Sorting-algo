//we are allowing duplicate arrays
//add key while putting value makes it easier to understand

import React from "react";
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }
  componentDidMount() {
    this.resetArray();
  }
  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({ array });
  }
  //  mergeSort(){
  //   const animation = getMergeSortAnimations(this.)
  //  }
  render() {
    const { array } = this.state;
    return (
      <>
        {array.map((value, idx) => (
          <div className="array-bar" key={idx}>
            {value}
          </div>
        ))}
      </>
    );
  }
}

function randomIntFromInterval(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
