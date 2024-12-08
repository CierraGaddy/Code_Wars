/* Elevator Distance

Problem {7 kyu}

Instructions
Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

if two consecutive floors are the same,
distance travelled between them is 0
elevatorDistance([3,3]) = 0
Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.

Solution */

function elevatorDistance(floors) {
  let totalDistance = 0;

  for (let i = 0; i < floors.length - 1; i++) {
    let distance = floors[i] - floors[i + 1];
    if (distance < 0) {
      distance = -distance;
    }
    totalDistance += distance;
  }

  return totalDistance;
}
/*This problem also challenged my thought process with iterations this time dealing with arrays.
In this problem I was also challenged with understanding the pattern and applying the code to 
solve. In this case I was finding the difference in times the elevator moved so I had to find 
a way to iterate through the array and calculate the difference between the distance of floors. */
