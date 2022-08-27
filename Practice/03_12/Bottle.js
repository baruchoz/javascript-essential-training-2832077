class Bottle {
  constructor(
    name,
    color,
    ounces,
    material,
    dishwasherSafe,
    bpaFree,
    height,
    width
  ) {
    this.name = name;
    this.color = color;
    this.ounces = ounces;
    this.material = material;
    this.dishwasherSafe = dishwasherSafe;
    this.bpaFree = bpaFree;
    this.dimensions = {
      height: height,
      width: width,
    };
  }
}

export default Bottle;
