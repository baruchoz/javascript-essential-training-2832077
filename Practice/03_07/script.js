/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const guitar = {
  name: "Sheraton II",
  brand: "Epiphone",
  mainColor: "black",
  secondaryColor: "white",
  hardwareColor: "gold",
  type: "electric",
  numberOfStrings: "6",
  madeIn: "China",
  body: {
    bodyShape: "Double Cutaway",
    bodyType: "Semi-hollow",
    bodyMaterial: "Laminated",
    bodyWood: "Maple Laminated",
    bodyFinish: "Gloss",
    orientation: "Right Handed",
  },
  neck: {
    neckShape: "'60's SlimTaper",
    neckWood: "Maple with Walnut",
    joint: "Set-in",
    scaleLength: 24.75,
    trussRod: "Standard",
    neckFinish: "Gloss",
  },
  fretboard: {
    fretboardMaterial: "Rosewood",
    radius: 12,
    fretSize: "Medium Jumbo",
    numberOfFrets: 22,
    inlays: "Bloack and Triangle",
    nutWidth: 1.687,
  },
  pickups: {
    configuration: "HH",
    neck: "Probucker 2",
    bridge: "Probucker 3",
    activeOrPassive: "Passive",
    specialElectronics: "Volume controls with coil tap",
  },
  controls: {
    controlLayout: ["Volume 1", "Volume 2", "Tone 1", "Tone 2"],
    pickupSwitch: "3-way switch",
    coilTapOrSplit: "Coil Tap",
    killswitch: false,
  },
};

console.log("This is the guitar object:", guitar);
