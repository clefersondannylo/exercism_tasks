//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = [
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
]
export const colorCode = color => {
  const typedColor = color.toLowerCase()
  const searchedColor = COLORS.findIndex(item => item === typedColor)
  return searchedColor
}


