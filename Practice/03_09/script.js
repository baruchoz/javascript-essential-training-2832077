/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  renameBackpack: function (newName) {
    this.name = newName;
  },
  changeVolume: function (volume) {
    this.volume = volume;
  },
  changeColor: function (color) {
    this.color = color;
  },
  changePocketNum: function (pocketCount) {
    this.pocketCount = pocketCount;
  },
};

console.log(backpack);

console.log("This is the backpack name before:", backpack.name);
backpack.renameBackpack("Travel Backpack");
console.log("This is the backpack name after:", backpack.name);

console.log("This is the volume before:", backpack.volume);
backpack.changeVolume(50);
console.log("This is the volume after:", backpack.volume);
