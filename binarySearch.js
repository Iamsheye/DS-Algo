const binarySearch = (arr, target) => {
  let lowerIndex = 0; // the first index of the array
  let upperIndex = arr.length - 1; // the last index of the array
  let middleIndex;
  let steps = 0;

  while (lowerIndex <= upperIndex) {
    steps++;
    middleIndex = Math.floor((upperIndex + lowerIndex) / 2); // the middle index of the array

    if (arr[middleIndex] === target) return middleIndex;

    if (target > arr[middleIndex]) {
      // If our target is greater than the middle value of the array, we change the first index of our new array to `middle value + 1`
      lowerIndex = middleIndex + 1;
    }

    if (target < arr[middleIndex]) {
      // If our target is less than the middle value of the array, we change the last index of our new array to `middle value - 1`
      upperIndex = middleIndex - 1;
    }
    console.log(steps);
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5));
