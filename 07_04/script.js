/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let deskArr = [
  "desk",
  "monitors",
  "laptop",
  "speakers",
  "headphones",
  "sticky notes",
  "pens",
  "coffee",
];
console.log("Original Array:", deskArr);

let lastItem = deskArr.pop();
console.log("Array without last item:", deskArr);

deskArr.unshift(lastItem);
console.log("Array with last item moved to front:", deskArr);

deskArr.sort();
console.log("Array sorted", deskArr);

const findCoffee = deskArr.find((item) => item === "coffee");
console.log("Found Drink:", findCoffee);

let remove = "coffee";
deskArr.splice(deskArr.indexOf(remove), 1);
console.log(`Array with "${remove}" removed:`, deskArr);
