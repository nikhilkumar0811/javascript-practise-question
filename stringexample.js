// Define two strings
let firstName = "John";
let lastName = "Doe";

// Concatenate strings
let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);

// Find length of the string
console.log("Length of Full Name: " + fullName.length);

// Convert string to uppercase
let upperCaseName = fullName.toUpperCase();
console.log("Upper Case Name: " + upperCaseName);

// Extract a portion of the string (slice)
let slicedName = fullName.slice(0, 4);
console.log("Sliced Name: " + slicedName);

// Replace part of the string
let replacedName = fullName.replace("John", "Jane");
console.log("Replaced Name: " + replacedName);
