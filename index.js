let stats = require("simple-statistics");

let numbers = [62, 60, 53, 9, 11, 14, 15, 16, 17, 65, 88];

console.log("the smallest number is " + stats.min(numbers));

console.log("the largest number is " + stats.max(numbers));

console.log("the sum of the numbers is " + stats.sumSimple(numbers));

console.log("the average of the numbers is " + stats.mean(numbers).toFixed(2));
