// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments
// We need at least 2 arguments.
const argumentList = process.argv;
const elements = argumentList.slice(2);

let total = 0;
// goes through each
for(let i = 0; i < argumentList.length; i++) {
  total += Number(argumentList[i]);
}
// If any argument is not a whole number, skip it
// Do support negative numbers though.
// If any argument is not a number, output an error message.

// add each number

// print the sum
