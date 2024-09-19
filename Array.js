// Creating an array of numbers
const numbers = [10, 20, 30, 40, 50];

// Function to calculate the sum of array elements
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Adding each element to the sum
  }
  return sum;
}

// Calling the function and storing the result
const total = calculateSum(numbers);

// Outputting the array and sum to the console
console.log("Array of numbers:", numbers);
console.log("Sum of numbers:", total);
