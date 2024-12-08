/* Complete The Pattern #1

Problem {7 kyu}

Instructions

You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern. Rules/Note:

If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.

Pattern: 
1 
22 
333 
.... 
..... 
nnnnnn

Solution */

function pattern(n) {
  if (n < 1) {
    return "";
  }

  let result = "";

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    result += row + "\n";
  }

  return result;
}
/* This problem was another that invloved me thinking through patterns and 
iterations. The nested loop was a bit of a challenge because I had to research 
to understand how the second iteration loop added the repitition of n , i times. 
I also wasn't familiar with the new line character*/
