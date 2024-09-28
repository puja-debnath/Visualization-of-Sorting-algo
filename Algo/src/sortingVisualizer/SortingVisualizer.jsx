//we are allowing duplicate arrays
//add key while putting value makes it easier to understand

import React from "react";
import getMergeSortAnimations from "../Algorithms/MergeSort.jsx";
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 110;

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
    this.setState({ array }); //updating state
  }
  mergeSort() {
    const animation = getMergeSortAnimations(this.state.array); //passing current array as argument
    for (let i = 0; i < animation.length; i++) {
      const Arraybar = <div className="inline-block m-0.5 w-2"></div>;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOne, barTwo] = animation[i];
        const barOneStyle = Arraybar[barOne].style;
        const barTwoStyle = Arraybar[barTwo].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(-1000, 1000);
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
      //jgjhgjhhjjg
    }
  }
  render() {
    //it extracts the array property from this.state and creates a variable named array.
    const { array } = this.state;

    return (
      <div className="absolute left-20">
        {array.map((value, idx) => (
          <div
            className={`inline-block m-0.5 w-2 bg-pink-700 h-[${value}]`}
            key={idx} // keys helps React identify which items have changed, are added, or are removed.
          ></div>
        ))}

        <button
          onClick={() =>
            //this is used to refer to the current instance of the class
            this.resetArray()
          }
        >
          {" "}
          Generate new array{" "}
        </button>

        <button onClick={() => this.mergeSort()}>Merge Sort</button>
      </div>
    );
  }
}

function randomIntFromInterval(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
