import React from 'react'

export const HeapSort = (arr) => {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return (arr)
  
};

const heapify = (arr, n, i) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[right]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[right]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[largest], arr[i]] = [arr[i], arr[largest]];
    heapify(arr, n, largest);
  }
};

