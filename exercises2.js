let word = ["hello", "world", "search", "good"];

let index = -1;

for (let i = 0; i < word.length; i++) {
  if (word[i] === "search") {
    index = i;
    break;
  }
}

console.log(index);

function findIndex(array, word) {
  let index = -1;

  for (let i = 0; i < array.length; i++)
    if (array[i] === word) {
      index = i;
      break;
    }
  return index;
}

console.log(findIndex(["green", "red", "blue", "red"], "red"));
console.log(findIndex(["green", "red", "blue", "red"], "yellow"));

function removeEgg(foods) {
  const foodList = [];

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      continue;
    }

    foodList.push(foods[i]);
  }
  return foodList;
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

function removeEgg0(foods) {
  const foodList = [];
  let egg = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      if (egg > 1) {
        foodList.push(foods[i]);
        continue;
      } else {
        egg++;
        continue;
      }
    }

    foodList.push(foods[i]);
  }
  return foodList;
}

console.log(removeEgg0(["egg", "apple", "egg", "egg", "ham"]));

function removeEgg1(foods) {
  let foodList = [];
  let egg = 0;
  let reverseFoods = foods.reverse();

  for (let i = 0; i < reverseFoods.length; i++) {
    if (reverseFoods[i] === "egg") {
      if (egg > 1) {
        foodList.push(reverseFoods[i]);

        continue;
      } else {
        egg++;
        continue;
      }
    }

    foodList.push(reverseFoods[i]);
  }

  return foodList.reverse();
}

console.log(removeEgg1(["egg", "apple", "egg", "egg", "ham"]));

function removeEgg2(foods) {
  const foodsCopy = foods.slice();
  const reverseFoods = foods.reverse();
  const foodList = [];
  let egg = 0;

  for (let i = 0; i < reverseFoods.length; i++) {
    if (reverseFoods[i] === "egg" && egg < 2) {
      egg++;
      continue;
    }

    foodList.push(reverseFoods[i]);
  }

  return foodList.reverse();
}
const foods = ["egg", "apple", "egg", "egg", "ham"];
console.log(foods);
console.log(removeEgg2(foods));

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else console.log(i);
}

function findIndex(array, word) {
  let index = -1;

  for (let i = 0; i < array.length; i++)
    if (array[i] === word) {
      index = i;
      break;
    }
  return index;
}

console.log(findIndex(["green", "red", "blue", "red"], "green"));
console.log(findIndex(["green", "red", "blue", "red"], "yellow"));

function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    let value = findIndex(result, word);

    if (value === -1) {
      result.push(word);
    }
  }
  return result;
}

console.log(unique(["green", "red", "blue", "red"]));
console.log(unique(["red", "green", "green", "red"]));
