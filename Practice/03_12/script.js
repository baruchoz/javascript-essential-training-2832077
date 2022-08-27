/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import Mug from "./Mug.js";
import Bottle from "./Bottle.js";

const schoolBag = new Backpack("SchoolBag", 35, "yellow", 12, 22, 22, false);
const odatMug = new Mug("Odat Mug", "Dark Grey", 12, "ceramic", true, true);
const contigoBottle = new Bottle(
  "ContigoBottle",
  "aquamarine",
  24,
  "plastic",
  true,
  true,
  12,
  2.5
);

console.log("This is the schoolBag Object: ", schoolBag);
console.log("This is the odatMug Object: ", odatMug);
console.log("This is the contigoBottle Object: ", contigoBottle);
