/*Pair of gloves

Problem {6 kyu}
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)

Solution*/

function numberOfPairs(gloves) {
  let colorCount = {};
  let pairs = 0;

  for (let i = 0; i < gloves.length; i++) {
    let color = gloves[i];
    if (colorCount[color] === undefined) {
      colorCount[color] = 1;
    } else {
      colorCount[color] = colorCount[color] + 1;
    }
  }

  for (let color in colorCount) {
    let count = colorCount[color];
    let pairCount = Math.floor(count / 2);
    pairs = pairs + pairCount;
  }

  return pairs;
}
/* This problem was challenging because I had to figure out how to efficiently count 
 the times the glove color was present without manually comparing the array items. 
 In this problem I was also using loops and iterations to calculate pairs of gloves. 
 
*/
