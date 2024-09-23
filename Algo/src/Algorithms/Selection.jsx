import React from "react";

export const Selection = (arr) => {
  const helper = (start, end) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[max]) {
        max = i;
      }
    }

    [arr[max], arr[arr.length - 1]] = [arr[arr.length - 1], max];
    helper(0, arr.length -2)
    Selection(arr);
     return arr;
  };


};
