/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const travelBackpack = new Backpack(
  "Travel Backpack",
  50,
  "green",
  20,
  30,
  30,
  true
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

console.log("The travelBackpack object:", travelBackpack);
console.log("The pocketNum value:", travelBackpack.pocketNum);
