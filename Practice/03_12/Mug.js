class Mug {
  constructor(name, color, ounces, material, microwaveSafe, dishwasherSafe) {
    this.name = name;
    this.color = color;
    this.ounces = ounces;
    this.material = material;
    this.microwaveSafe = microwaveSafe;
    this.dishwasherSafe = dishwasherSafe;
  }
  changeColor(newColor) {
    this.color = newColor;
  }
  changeOunces(newOunces) {
    this.ounces = newOunces;
  }
}

export default Mug;
