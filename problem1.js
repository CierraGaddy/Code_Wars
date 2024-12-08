/* Miles per gallon to kilometers per liter

 Problem {8 kyu}

 Instructions

Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Your answer should be accurate within 0.01 kpl.

Some useful associations relevant to this kata:

1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres


Solution */

function converter(mpg) {
  const milesToKm = 1.609344;
  const gallonToLiters = 4.54609188;

  const kilometers = mpg * milesToKm;
  const liters = gallonToLiters;

  const kpl = kilometers / liters;

  const roundedKpl = kpl.toFixed(2);

  return parseFloat(roundedKpl);
}
/* In my opinion this problem helped to show me the importance out our 
Tech Math lessons. I say this because initally a lot of people don't think
math is seriously incorporated in coding but it is more so the application of 
the code to solve problems that require math that is important to understand.
So in this case I had to google the conversions in order to solve. I also had 
to understand the methods used for math senarios like how .toFixted() helps 
put the decimal place the right spot and how parseFloat() turns a string into
 a number */
