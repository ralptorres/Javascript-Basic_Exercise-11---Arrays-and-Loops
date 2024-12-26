const nums = [10, 20, 30];

nums[2] = 99;

console.log(nums);

const arrayValue1 = ["hi", "hello", "good"];

function getLastValue(array) {
  const returnArray = array[array.length - 1];
  return returnArray;
}

console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(["hi", "hello", "good"]));

function arraySwap(array1) {
  let start = "";
  let end = "";

  start = array1[0];
  end = array1[array1.length - 1];

  array1[0] = end;
  array1[array1.length - 1] = start;
  return array1;
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(["hi", "hello", "good"]));

for (i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (i1 = 5; i1 >= 0; i1--) {
  console.log(i1);
}

let i2 = 0;

while (i2 <= 10) {
  console.log(i2);
  i2 += 2;
}

let i3 = 5;

while (i3 >= 0) {
  console.log(i3);
  i3--;
}

const numb = [1, 2, 3];

let numb1 = [];

for (i = 0; i < numb.length; i++) {
  numb1.push(numb[i] + 1);
}
console.log(numb1);

function addOne(array) {
  let numb3 = [];

  for (let i = 0; i < array.length; i++) {
    numb3.push(array[i] + 1);
  }
  return numb3;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

function addNum(array, num) {
  let arrayCon = [];

  for (let i = 0; i < array.length; i++) {
    arrayCon.push(array[i] + num);
  }
  return arrayCon;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

function addArrays(array1, array2) {
  let arrayCon = [];

  for (let i = 0; i < array1.length; i++) {
    arrayCon.push(array1[i] + array2[i]);
  }
  return arrayCon;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

function countPositive(nums) {
  let positiveNum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      positiveNum += 1;
    }
  }
  return positiveNum;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function minMax(nums) {
  let number = {
    min: null,
    max: null,
  };

  let compareNum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (number.min === null || nums[i] < number.min) {
      number.min = nums[i];
    }

    if (number.max === null || nums[i] > number.max) {
      number.max = nums[i];
    }
  }
  return number;
}

console.log(minMax([1, -3, 5, 14, 100, 200, -23, -22]));
console.log(minMax([-2, 3, -5, 7, 10, -13, 100]));
console.log(minMax([]));
console.log(minMax([1]));

function countWords(words) {
  let object = {
    apple: 0,
    grape: 0,
  };

  for (let i = 0; i < words.length; i++) {
    const fruit = words[i];
    if (fruit === Object.keys(object)[0]) {
      object.apple += 1;
    } else object.grape += 1;
  }

  return object;
}

console.log(countWords(["apple", "grape", "apple", "apple", "grape", "apple"]));

function countWords1(words) {
  let object1 = {};

  for (let i = 0; i < words.length; i++) {
    const fruit = words[i];

    if (!object1[fruit]) {
      object1[fruit] = 1;
    } else {
      object1[fruit]++;
    }
  }
  return object1;
}

console.log(
  countWords1([
    "apple",
    "grape",
    "apple",
    "apple",
    "grape",
    "apple",
    "guava",
    "guava",
    "strawberry",
  ])
);

function countWords2(words) {
  let object = {
    apple: 0,
    grape: 0,
  };

  for (let i = 0; i < words.length; i++) {
    const fruit = words[i];
    object[fruit]++;
  }

  return object;
}

console.log(
  countWords2(["apple", "grape", "apple", "apple", "grape", "apple", "grape"])
);
