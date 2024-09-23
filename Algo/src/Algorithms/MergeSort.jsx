export const getMergeSortAnimations = (arr) => {
  const animations = [];
  if (arr.length <= 1) {
    return arr;
  }
  const auxiliaryArray = arr.slice();
  MergeSort(arr, 0, arr.length - 1, animations, auxiliaryArray);
  return animations;
};
function MergeSort(arr, start, end, animations, sort) {
  const mid = math.floor((start + end) / 2);
  const left = MergeSort(arr, start, mid, animations, sort);
  const right = MergeSort(arr, mid + 1, end, animations, sort);
  doMerge(arr, left, right);
}
function doMerge(left, right) {
  const mix = new Array(left.length + right.length);
  let i = 0;
  let k = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mix[k] = left[i];
      i++;
    } else {
      mix[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    mix[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    mix[k] = right[j];
    j++;
    k++;
  }
  return mix;
}
