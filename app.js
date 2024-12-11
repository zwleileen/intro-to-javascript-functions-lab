// console.log("gruezi");
// Exercise 1
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}
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
console.log("Exercise 3 Result:", isCharAVowel("a"));

// Exercise 4
function generateEmail(name, domain) {
  return name + "@" + domain;
}
console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

// Exercise 5
function greetUser(name, time) {
  return "Good " + time + ", " + name + "!";
}
console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

// Exercise 6
function maxOfThree(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >= z) {
    return y;
  } else {
    return z;
  }
}
console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

// Exercise 7
function calculateTip(bill, tipPercentage) {
  const tip = bill * (tipPercentage / 100);
  return tip;
}
console.log("Exercise 7 Result:", calculateTip(50, 20));

// Exercise 8
function convertTemperature(temperature, scale) {
  if (scale === "C") {
    const convertToF = (temperature * 9) / 5 + 32;
    return convertToF + " (Fahrenheit)";
  } else {
    const convertToC = (temperature - 32) * (5 / 9);
    return convertToC + " (Celsius)";
  }
}
console.log("Exercise 8 Result:", convertTemperature(32, "F"));

// Exercise 9
function basicCalculator(a, b, operation) {
  if (operation === "multiply") {
    const result1 = a * b;
    return result1;
  } else if (operation === "divide") {
    const result2 = a / b;
    return result2;
  } else if (operation === "add") {
    const result3 = a + b;
    return result3;
  } else {
    const result4 = a - b;
    return result4;
  }
}
console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));
