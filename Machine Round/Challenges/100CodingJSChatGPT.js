//----------------------------------------------------------
// Write a function reverseString(s) that takes a string s and returns the reversed string.
// Do not use Array.prototype.reverse().

const reverseString = (str = "") => {
  //Handling Edge cases.
  if (!str) return "";

  let strArray = Array.from(str);

  let start = 0;
  let end = strArray.length - 1;

  while (start < end) {
    [strArray[start], strArray[end]] = [strArray[end], strArray[start]];
    start++;
    end--;
  }

  return strArray.join("");
};

// console.log(reverseString("ABC"));

//----------------------------------------------------------

// Write a function firstRecurringCharacter(arr)
// Return the first recurring element in the array.
// If no recurring element, return undefined.

const firstRecurringCharacter = (arr = []) => {
  if (!Array.isArray(arr)) {
    throw new Error("Arguments must be an Array");
  }

  if (!arr.length) return undefined;

  let set = new Set();

  for (let char of arr) {
    if (set.has(char)) {
      return char;
    } else {
      set.add(char);
    }
  }

  return undefined;
};

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5]));
// console.log(firstRecurringCharacter([2, 3, 4, 5]));
// console.log(firstRecurringCharacter([1, 1]));

//-------------------------------------------------------------------------------------

// Write a function removeDuplicates(arr)
// Given a SORTED array, remove duplicates IN-PLACE.
// Return the new length after removing duplicates.
// Must run in O(n) time and O(1) space (no extra arrays or Sets).

const removeDuplicates = (arr = []) => {
  if (!Array.isArray(arr)) {
    throw new Error("Argument must be an array");
  }

  if (arr.length === 0) return 0;

  let write = 1;

  for (let read = 1; read < arr.length; read++) {
    if (arr[read] !== arr[write - 1]) {
      arr[write] = arr[read];
      write++;
    }
  }

  arr.length = write;
  return write;
};

// ------------------
// Test Cases
// ------------------

// let nums1 = [1, 1, 2];
// console.log("Original:", nums1);
// console.log("New Length:", removeDuplicates(nums1));
// console.log("Modified Array:", nums1);

// let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log("Original:", nums2);
// console.log("New Length:", removeDuplicates(nums2));
// console.log("Modified Array:", nums2);

// let nums3 = [];
// console.log("Original:", nums3);
// console.log("New Length:", removeDuplicates(nums3));
// console.log("Modified Array:", nums3);

//-------------------------------------------------------------------------------------
// Write a function areAnagrams(str1, str2)
// Return true if both strings are anagrams, else false.
// Must ignore case and spaces.
// Must use O(n) time (no sorting).

const areAnagrams = (str1 = "", str2 = "") => {
  let s1 = str1.toLowerCase().replace(/\s/g, "");
  let s2 = str2.toLowerCase().replace(/\s/g, "");

  if (s1.length !== s2.length) return false;

  //
  let freq = {};

  for (let char of s1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of s2) {
    if (!freq[char]) return false;

    freq[char]--;
  }

  return true;
};

// console.log(areAnagrams("listen", "silent")); // Expected: true
// console.log(areAnagrams("hello", "world")); // Expected: false
// console.log(areAnagrams("aabbcc", "abcabc")); // Expected: true
// console.log(areAnagrams("rat", "car")); // Expected: false
// console.log(areAnagrams("Heart", "Earth")); // Expected: true
// console.log(areAnagrams("School Master", "The Classroom")); // Expected: true
// console.log(areAnagrams("aaab", "aabb")); // Expected: false

//-------------------------------------------------------------------------------------
// Write a function longestUniqueSubstring(str)
// Return length of the longest substring with all unique characters.
// Must run in O(n) time using sliding window.

const longestUniqueSubstring = (str = "") => {
  if (!str.length) return 0;

  let max = 0;
  let left = 0;
  const charSet = new Set();

  for (let right = 0; right < str.length; right++) {
    //If char alreday exist in Set

    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }

    //Add char to charSet
    charSet.add(str[right]);

    //Get the Max
    max = Math.max(max, right - left + 1);
  }
  return max;
};

// console.log(longestUniqueSubstring("abcabcbb")); // Expected: 3
// console.log(longestUniqueSubstring("bbbbb")); // Expected: 1
// console.log(longestUniqueSubstring("pwwkew")); // Expected: 3
// console.log(longestUniqueSubstring("")); // Expected: 0
// console.log(longestUniqueSubstring("dvdf")); // Expected: 3

//-------------------------------------------------------------------------------------

// Write a function twoSum(nums, target)
// Return indices of the two numbers that add up to target.
// Must run in O(n) using a hash map.

function twoSum(nums, target) {
  const map = new Map(); // Store value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if complement exists in map
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    // Store current number and its index
    map.set(nums[i], i);
  }

  return []; // No solution found (shouldn't happen per problem statement)
}

// console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
// console.log(twoSum([3, 3], 6)); // Expected: [0, 1]
// console.log(twoSum([1, 5, 2, 7, 11], 9)); // Expected: [0, 3]

//-------------------------------------------------------------------------------------

// majorityElement(nums)
// Return the element that appears more than n/2 times in the array.
// Time: O(n), Space: O(1)

const majorityElement = (nums = []) => {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) candidate = num;

    count += num === candidate ? 1 : -1;
    console.log(candidate, count);
  }

  return candidate;
};

// console.log(majorityElement([3, 2, 3])); // Expected: 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Expected: 2
// console.log(majorityElement([1])); // Expected: 1
// console.log(majorityElement([6, 6, 6, 7, 7])); // Expected: 6

//-------------------------------------------------------------------------------------

// isValidParentheses(s)
// Return true if the parentheses string s is valid (matching and well-ordered).
// Use a stack-based approach for linear time and linear space.

const isValidParentheses = (s = "") => {
  if (typeof s !== "string") {
    throw new Error("Argument must be a string");
  }

  const openToClose = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (let braces of s) {
    // opening brace: push to stack
    if (braces in openToClose) {
      stack.push(braces);
    } else {
      // If stack empty → invalid
      if (stack.length === 0) return false;

      const last = stack[stack.length - 1];

      if (openToClose[last] === braces) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  // All opened braces must be closed
  return stack.length === 0;
};

// console.log(isValidParentheses("()")); // Expected: true
// console.log(isValidParentheses("()[]{}")); // Expected: true
// console.log(isValidParentheses("(]")); // Expected: false
// console.log(isValidParentheses("([)]")); // Expected: false
// console.log(isValidParentheses("{[]}")); // Expected: true
// console.log(isValidParentheses("")); // Expected: true
// console.log(isValidParentheses("((({[]})))")); // Expected: true
// console.log(isValidParentheses("]")); // Expected: false

//-------------------------------------------------------------------------------------
const prefixSum = (arr = []) => {
  if (!Array.isArray(arr)) throw new Error("Argument must be an array");

  let prev = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = prev;
    prev += arr[i];
  }
  return result;
};

// Tests
// console.log(prefixSum([2, 3, 4])); // Expected: [0, 2, 5]
// console.log(prefixSum([1, 1, 1])); // Expected: [0, 1, 2]
// console.log(prefixSum([5])); // Expected: [0]
// console.log(prefixSum([])); // Expected: []

//-------------------------------------------------------------------------------------
const suffixSum = (arr = []) => {
  if (!Array.isArray(arr)) throw new Error("Argument must be an array");

  // Your implementation below:
  let temp = 0;
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = temp;
    temp += arr[i];
  }
  return result;
};

// Tests
// console.log(suffixSum([2, 3, 4])); // Expected: [7, 4, 0]
// console.log(suffixSum([1, 1, 1])); // Expected: [2, 1, 0]
// console.log(suffixSum([5])); // Expected: [0]
// console.log(suffixSum([])); // Expected: []

//-------------------------------------------------------------------------------------

// productExceptSelf
// Build prefix (left) products and suffix (right) products, then multiply.
// Time: O(n), Extra space: O(n) (pre/suf arrays) — output excluded.

const productExceptSelf = (nums = []) => {
  if (!Array.isArray(nums)) throw new Error("Argument must be an array");
  if (nums.length === 0) return [];
  if (nums.length === 1) return [1];

  const n = nums.length;
  const prefix = new Array(n);
  const suffix = new Array(n);
  const result = new Array(n);

  // Build prefix products: prefix[i] = product of nums[0..i-1]
  let p = 1;
  for (let i = 0; i < n; i++) {
    prefix[i] = p;
    p *= nums[i];
  }

  // Build suffix products: suffix[i] = product of nums[i+1..n-1]
  let s = 1;
  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = s;
    s *= nums[i];
  }

  // Multiply prefix and suffix for final result
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
};

// ------------------
// Test Cases
// ------------------
// console.log(productExceptSelf([1, 2, 3, 4])); // Expected: [24, 12, 8, 6]
// console.log(productExceptSelf([0, 0])); // Expected: [0, 0]
// console.log(productExceptSelf([0, 1, 2, 3])); // Expected: [6, 0, 0, 0]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Expected: [0, 0, 9, 0, 0]
// console.log(productExceptSelf([5])); // Expected: [1]

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
