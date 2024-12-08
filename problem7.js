/*Josephus Survivor

// * Problem {5 kyu}

// * Instructions

In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

n=7, k=3 => means 7 people in a circle
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.

 Solution */

function josephusSurvivor(n, k) {
  let people = [];
  for (let i = 1; i <= n; i++) {
    people.push(i);
  }

  let index = 0;
  while (people.length > 1) {
    index = (index + k - 1) % people.length;
    people.splice(index, 1);
  }

  return people[0];
}

/* The hardest part of this problem was probably understanding the execution of the process of elimination. 
I was also using iterations and loops for this problem but also had to make use of the modulo operator
in order to find the position of the next survivor. I used methods such as .push() to the people in the 
array, and .splice() to remove the people.
*/
