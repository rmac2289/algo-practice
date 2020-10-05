/* 
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

Example


-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
The  hourglass sums are:

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
The highest hourglass sum is  from the hourglass beginning at row , column :

0 4 3
  1
8 6 6

Function Description

Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):

int arr[6][6]: an array of integers
Returns

int: the maximum hourglass sum
Input Format

Each of the  lines of inputs  contains  space-separated integers .

Constraints

Output Format

Print the largest (maximum) hourglass sum found in .

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
Sample Output

19
*/
function hourglassSum(arr) {
  let hourGlasses = [];
  for (let row = 0; row <= 3; row++) {
    for (let col = 0; col <= 3; col++) {
      let sum = 0;

      sum += arr[row][col];
      sum += arr[row][col + 1];
      sum += arr[row][col + 2];
      sum += arr[row + 1][col + 1];
      sum += arr[row + 2][col];
      sum += arr[row + 2][col + 1];
      sum += arr[row + 2][col + 2];

      hourGlasses.push(sum);
    }
  }
  return Math.max(...hourGlasses);
}
/*
It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! 
There are a number of people queued up, and each person wears a 
sticker indicating their initial position in the queue. Initial 
positions increment by  from  at the front of the line to  at the back.
Any person in the queue can bribe the person directly in front of them 
to swap positions. If two people swap positions, they still wear the same 
sticker denoting their original places in line. One person can bribe at most 
two others.

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.
minimumBribes has the following parameter(s):

q: an array of integers

Complete the minimumBribes function below.
The function checks first if the first 3 places are possible, then moves 
along the array by incremented the "expected" variables accordingly. 
*/
function minimumBribes(q) {
  let total = 0;

  let expectedFirst = 1;
  let expectedSecond = 2;
  let expectedThird = 3;
  for (let i = 0; i < q.length; i++) {
    if (q[i] === expectedFirst) {
      expectedFirst = expectedSecond;
      expectedSecond = expectedThird;
      expectedThird++;
    } else if (q[i] === expectedSecond) {
      total++;
      expectedSecond = expectedThird;
      expectedThird++;
    } else if (q[i] === expectedThird) {
      total += 2;
      expectedThird++;
    } else {
      return console.log("Too chaotic");
    }
  }
  return total;
}
// Minimum swaps to sort array of consecutive digits 1 through n
// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swap = 0,
    visited = [];
  for (let i = 0; i < arr.length; i++) {
    let j = i,
      cycle = 0;
    while (!visited[j]) {
      visited[j] = true;
      j = arr[j] - 1;
      cycle++;
    }
    if (cycle != 0) swap += cycle - 1;
  }
  return swap;
}
