//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.

//
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

const colorCode = color => {
  return COLORS.indexOf(color);
};
export const decodedValue = items => {
  const stringResult =
    colorCode(items[0]).toString() + colorCode(items[1]).toString();
  return Number(stringResult);
};


