function narcissistic(value) {
  // Convert the number to a string to count the number of digits
  const valueStr = value.toString();
  const numDigits = valueStr.length;

  // Calculate the sum of digits raised to the power of numDigits
  const sum = valueStr.split('').reduce((acc, digit) => {
    return acc + Math.pow(parseInt(digit), numDigits);
  }, 0);

  // Check if the sum is equal to the original number
  return sum === value;
}

// Test cases
console.log(narcissistic(153)); // Should return true
console.log(narcissistic(1652)); // Should return false