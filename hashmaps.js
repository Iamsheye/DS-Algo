// Exercise 2
// Write a function that accepts an array of strings and returns the first
// duplicate value it finds. For example, if the array is ["a", "b", "c", "d", "c", "e", "f"] , the function should return "c" , since it’s duplicated within the array.
// (You can assume that there’s one pair of duplicates within the array.)
// Make sure the function has an efficiency of O(N).

const checkDuplicate = (arr) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return arr[i];
    } else {
      map.set(arr[i], true);
    }
  }
  return false;
};

console.log(checkDuplicate([1, 2, 3]));
console.log(checkDuplicate([1, 2, 1]));

// Exercise 1
// Write a function that returns the intersection of two arrays. The intersection is a third array that contains all values contained within the first two arrays.
// For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4] . Your function should have a complexity of O(N).
// (If your programming language has a built-in way of doing this, don’t use it. The idea is to build the algorithm yourself.)

const intersectionValues = (firstArr, secondArr) => {
  let largerArr, smallerArr;
  const map = new Map();
  let intersectArr = [];

  if (firstArr.length > secondArr.length) {
    largerArr = firstArr;
    smallerArr = secondArr;
  } else {
    largerArr = secondArr;
    smallerArr = firstArr;
  }

  for (let i = 0; i < largerArr.length; i++) {
    map.set(largerArr[i], true);
  }

  for (let i = 0; i < smallerArr.length; i++) {
    if (map.has(smallerArr[i])) {
      intersectArr.push(smallerArr[i]);
    }
  }

  return intersectArr;
};

console.log(intersectionValues([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]));
