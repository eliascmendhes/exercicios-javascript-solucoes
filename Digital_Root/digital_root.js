function digitalRoot(n) {
  // Convert n to a string to work with its digits
  const nStr = n.toString();

  // Calculate the sum of its digits
  const sum = nStr.split('').reduce((acc, digit) => {
    return acc + parseInt(digit, 10);
  }, 0);

  // If the sum has more than one digit, recursively call digitalRoot
  if (sum >= 10) {
    return digitalRoot(sum);
  } else {
    // Otherwise, return the single-digit sum as the digital root
    return sum;
  }
}

// Test cases
console.log(digitalRoot(16));      // Should return 7
console.log(digitalRoot(942));     // Should return 6
console.log(digitalRoot(132189));  // Should return 6
console.log(digitalRoot(493193));  // Should return 2