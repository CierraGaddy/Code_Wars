/* Draw stairs

Problem {8 kyu}

Instructions
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I

Solution */

function drawStairs(n) {
  if (n < 1) {
    return ""; // If there are no stairs, return an empty string
  }

  let stairs = "";
  for (let i = 0; i < n; i++) {
    let spaces = "";
    for (let j = 0; j < i; j++) {
      spaces += " ";
    }
    stairs += spaces + "I" + "\n";
  }

  return stairs;
}
/*I think this particular problem was interesting and kind of fun because 
it was working with a pattern which is a more visual solution. The thought 
process in my opinion was helpful for thinking through how our coding solutions
can affect the visual emements of a page beyond HTML and CSS. This problem challenged me
with understanding loops and iterations to properly display the stairs in the right spaces.
Thinking through a visual solution meant I had to first understand the patter which was a 
little challenging (that with each stair there is one more space added than before.). */
