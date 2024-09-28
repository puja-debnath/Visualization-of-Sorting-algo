export  default function getMergeSortAnimations(array) {
  const animation = []; //for visualization
  if (array.length <= 1) {
    return array;
  }
  const ShallowArray = array.slice(); //copy of array to perform operations
  MergeSort(array, 0, array.length - 1, ShallowArray, animation);
}

function MergeSort(MainArray, start, end, ShallowArray, animation) {
  if (start === end) {
    return;
  }
  const middle = Math.floor(start + end) / 2;
  MergeSort(ShallowArray, start, middle, MainArray, animation); //shallow came first to perform operation on it
  MergeSort(ShallowArray, middle + 1, end, MainArray, animation); //mainarray will ne unchanged
  DoMergeSort(MainArray, start, middle, end, ShallowArray, animation);
}

function DoMergeSort(MainArray, start, middle, end, ShallowArray, animation) {
  let k = start; // for mainArray
  let i = start; // fro left array
  let j = middle + 1; // for right array
  while (i < middle && j < end) {
    // These are the values that we're comparing; we push them once to change their color.
    animation.push([i, j]);
    //These are the values that we're comparing; we push them a second time to revert their color.
    animation.push([i, j]);
    if (ShallowArray[i] < ShallowArray[j]) {
      animation.push([k, ShallowArray[i]]);
      MainArray[k++] = ShallowArray[i++];
    } else {
      animation.push([k, ShallowArray[j]]);
      MainArray[k++] = ShallowArray[j++];
    }
    while (i < middle) {
      animation.push([i, j]);
      animation.push([i, j]);
      animation.push([k, ShallowArray[i]]);
      MainArray[k++] = ShallowArray[i++];
    }
    while (j < end) {
      animation.push([i, j]);
      animation.push([i, j]);
      animation.push([k, ShallowArray[j]]);
      MainArray[k++] = ShallowArray[j++];
    }
  }
}
