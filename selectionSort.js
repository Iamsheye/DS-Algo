const selectionSort = (arr) => {
  let steps = 0; // store the number of steps it takes to sort the array

  for (let i = 0; i < arr.length; i++) {
    let minimumIndex = i; // store the index of the minimum value

    for (let j = i + 1; j < arr.length; j++) {
      // start a nested loop that runs from i + 1 to end or array
      steps++;
      if (arr[j] < arr[minimumIndex]) {
        // if current value is less than `minimumIndex` we update minimumIndex with the current index
        minimumIndex = j;
      }
    }

    if (minimumIndex !== i) {
      // if minimumIndex is different from current loop index `i`, we swap both values
      steps++;
      let tmp = arr[i];
      arr[i] = arr[minimumIndex];
      arr[minimumIndex] = tmp;
    }
  }

  console.log(steps);
  return arr;
};

console.log(selectionSort([4, 2, 7, 1, 3]));
