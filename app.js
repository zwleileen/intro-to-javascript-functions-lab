// console.log("gruezi");
// Exercise 1
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};
console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

// Exercise 2
function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
console.log("Exercise 2 Result:", isAdult(21));

// Exercise 3
function isCharAVowel(m) {
  if (m === "a" || m === "e" || m === "i" || m === "o" || m === "u") {
    return "true";
  } else {
    return "false";
  }
}
console.log("Exercise 3 Result:", isCharAVowel("p"));

// Exercise 4
