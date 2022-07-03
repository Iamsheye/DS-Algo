const bubbleSort = (arr) => {
  // Keep the last value in the array as the last unsorted index
  let unsortedUntilIndex = arr.length - 1;
  let sorted = false;
  let steps = 0;

  while (!sorted) {
    sorted = true; // We assume that the array is sorted if we encounter no swaps

    for (let i = 0; i < unsortedUntilIndex; i++) {
      steps++;
      if (arr[i] > arr[i + 1]) {
        // If we encounter a case where the `arr[i]` is greater than `arr[i + 1]`, we swap both values and change sorted back to false
        steps++;
        sorted = false;
        let val = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = val;
      }
    }
    unsortedUntilIndex -= 1; // we reduce the last unsorted index
  }
  console.log(steps);
  return arr;
};

console.log(bubbleSort([4, 2, 7, 1, 3]));
