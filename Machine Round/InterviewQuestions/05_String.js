// Check if a string is a palindrome

const isPalindrome = (str) => {
  // Validate input
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  // Convert to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

// Test cases
console.log(isPalindrome("NitiN")); // true
console.log(isPalindrome("NitiN1")); // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
console.log(isPalindrome("")); // true
