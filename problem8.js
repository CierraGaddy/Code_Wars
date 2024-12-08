/* Count IP Addresses

Problem {5 kyu}

Instructions

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246

Solution */

function ipsBetween(start, end) {
  let startArr = start.split(".").map(Number);
  let endArr = end.split(".").map(Number);

  let startInt = 0;
  let endInt = 0;

  for (let i = 0; i < 4; i++) {
    startInt = startInt * 256 + startArr[i];
    endInt = endInt * 256 + endArr[i];
  }

  return endInt - startInt;
}
/* Solving this problem I was confused because I wasn’t sure how to convert IP addresses into numbers.
 A main challenge was figuring out the math behind converting the IP into a single integer and 
 making sure I understood how to calculate the difference between the two IPs correctly. Again I was using
 loops and iterations to do this.
 */
