//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

// Convert a String to Title Case
const toTitleCase = (str = "") => {
  if (!str) return "";

  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

// console.log(toTitleCase("hello world")); // Hello World
// console.log(toTitleCase("HELLO WORLD")); // Hello World
// console.log(toTitleCase("javaScript is AWESOME")); // Javascript Is Awesome
// console.log(toTitleCase("")); // ""

//---------------------------------------------------------------------------------

// Check if a String is a Valid Shuffle of Two Strings
//Todo
const isValidShuffle = () => {};

// console.log(isValidShuffle("abc", "def", "adbcef")); // true
// console.log(isValidShuffle("abc", "def", "abdecf")); // true
// console.log(isValidShuffle("abc", "def", "abcdef")); // true
// console.log(isValidShuffle("abc", "def", "abdfec")); // false (order of 'e' and 'f' broken)
// console.log(isValidShuffle("abc", "def", "abcd")); // false (length mismatch)

//---------------------------------------------------------------------------------

// Remove All White Spaces from a String

const removeWhiteSpace = (str = "") => {
  if (!str) return "";

  return str.replace(/\s+/g, "");
  return [...str].filter((char) => char != " ").join("");
};

// console.log(removeWhiteSpace(" sfd dfd      sdfd   "));
//---------------------------------------------------------------------------------

// Check if a String is a Rotation of Another String
//---------------------------------------------------------------------------------
// Find All Substrings of a Given String

const findAllSubstrings = (str = "") => {
  if (typeof str !== "string") throw new Error("Invalid Input");
  if (!str.length) return [];

  let result = [];

  for (let start = 0; start < str.length; start++) {
    let temp = "";
    for (let end = start; end < str.length; end++) {
      temp += str[end];
      result.push(temp);
    }
  }

  return result;
};

// const findAllSubstrings = (str = "") => {
//   if (!str) return [];

//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       result.push(str.substring(i, j));
//     }
//   }
//   return result;
// };

// console.log(findAllSubstrings("abc")); //["a", "ab", "abc", "b", "bc", "c"];
// console.log(findAllSubstrings("ab")); // ["a", "ab", "b"]
// console.log(findAllSubstrings("a")); // ["a"]
// console.log(findAllSubstrings("")); // []

//---------------------------------------------------------------------------------

// Find the Most Frequent Character
const mostFrequentChar = (str = "") => {
  if (typeof str !== "string") return null;
  if (!str.length) return null;

  let freq = {};
  let result = null;
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    freq[char] = (freq[char] || 0) + 1;

    if (freq[char] > maxCount) {
      maxCount = freq[char];
      result = char;
    }
  }

  return { maxCount, result };
};

// console.log(mostFrequentChar("aabbbcccc")); // c
// console.log(mostFrequentChar("hello")); // l
// console.log(mostFrequentChar("abcd")); // a
// console.log(mostFrequentChar(""));

//---------------------------------------------------------------------------------

// Convert a String to an Integer (atoi)
const myAtoi = (str = "") => {
  if (typeof str !== "string") throw new Error("Invalid Input");

  let i = 0;
  let result = 0;
  let sign = 1;

  str = str.trim();

  if (!str.length) return 0;

  //handle Sign
  if (str[i] === "-" || str[i] === "+") {
    sign = str[i] === "-" ? -1 : 1;
    i++;
  }

  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    result = result * 10 + parseInt(str[i]);
    i++;
  }

  return result * sign;
};

// console.log(myAtoi("42")); // 42
// console.log(myAtoi("   -42")); // -42
// console.log(myAtoi("4193 with text")); // 4193
// console.log(myAtoi("words 987")); // 0
// console.log(myAtoi("-912834")); // -912834
// console.log(myAtoi("")); // 0

//---------------------------------------------------------------------------------
// Find the Longest Substring Without Repeating Characters

const longestUniqueSubstring = (str = "") => {
  if (!str) return str;

  let start = 0;
  let seen = new Set();
  let maxLen = 0;
  let maxStart = 0;

  for (let end = 0; end < str.length; end++) {
    while (seen.has(str[end])) {
      seen.delete(str[start]);
      start++;
    }

    seen.add(str[end]);

    if (end - start + 1 > maxLen) {
      maxLen = Math.max(maxLen, end - start + 1);
      maxStart = start;
    }
  }

  return str.substring(maxStart, maxStart + maxLen);
};

// console.log(longestUniqueSubstring("abcabcbb")); // 3 ("abc")
// console.log(longestUniqueSubstring("bbbbb")); // 1 ("b")
// console.log(longestUniqueSubstring("pwwkew")); // 3 ("wke")
// console.log(longestUniqueSubstring("")); // 0
// console.log(longestUniqueSubstring("dvdf")); // 3 ("vdf")
//---------------------------------------------------------------------------------

// Check if Two Strings are Anagrams

const areAnagrams = (a = "", b = "") => {
  if (a.length !== b.length) return false;

  const freq = {};

  for (const ch of a) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (const ch of b) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }

  return true;
};

// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "world")); // false
// console.log(areAnagrams("evil", "vile")); // true
// console.log(areAnagrams("aabb", "bbaa")); // true
// console.log(areAnagrams("test", "ttew")); // false

//---------------------------------------------------------------------------------

// Filter anagrams

function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

// console.log(
//   aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]),
// );

//---------------------------------------------------------------------------------

// Count the Occurrences of Each Character
const countCharOccurrences = (str = "") => {
  if (typeof str !== "string") throw new Error("Invalid Input");
  if (!str.length) return null;

  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
};

// console.log(countCharOccurrences("abcmddfmsdfsaaf"));
//---------------------------------------------------------------------------------

// Find the First Non-Repeating Character
const firstNonRepeatingChar = (str = "") => {
  if (typeof str !== "string") throw new Error("Invalid Input");
  if (!str.length) return null;

  const freq = new Map();

  // Count frequency
  for (const char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  // Find first non-repeating from original string
  for (const char of str) {
    if (freq.get(char) === 1) {
      return char;
    }
  }

  return null;
};

// console.log(firstNonRepeatingChar("swiss")); // "w"
// console.log(firstNonRepeatingChar("programming")); // "p"
// console.log(firstNonRepeatingChar("aabbcc")); // null

//---------------------------------------------------------------------------------

// Remove Duplicates from a String
const removeDuplicates = (str = "") => {
  if (typeof str !== "string") throw new Error("Invalid Input");
  if (!str.length) return "";

  let seen = new Map();

  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }
  // return result;
};

// console.log(removeDuplicates("programming")); // "progamin"
//---------------------------------------------------------------------------------

// Check if a String is a Palindrome

const checkPalindrome = (str = "") => {
  if (typeof str !== "string") return false;
  if (!str.length) return true;

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) return false;

    start++;
    end--;
  }

  return true;
};

// console.log(checkPalindrome("NITI"));
//---------------------------------------------------------------------------------

//Reverse a string

const reverseString = (str = "") => {
  if (!str.length) return undefined;

  const arr = str.split("");
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr.join("");
};

// console.log(reverseString("Hello World"));

//---------------------------------------------------------------------------------
// 2722. Join Two Arrays by ID

var join = function (arr1, arr2) {
  let result = {};

  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = { ...arr1[i] };
  }
  for (let i = 0; i < arr2.length; i++) {
    const id = arr2[i].id;
    result[id] = { ...result[id], ...arr2[i] };
  }

  return Object.values(result);
};

let arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
let arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

// console.log(join(arr1, arr2));

//---------------------------------------------------------------------------------
const groupByCategory = (arr = []) => {
  return arr.reduce((result, item) => {
    if (!result[item.category]) {
      result[item.category] = [];
    }

    result[item.category].push(item);

    return result;
  }, {});
};

// console.log(
//   groupByCategory([
//     { id: 1, category: "Mobile", name: "iPhone" },
//     { id: 2, category: "Laptop", name: "MacBook" },
//     { id: 3, category: "Mobile", name: "Pixel" },
//   ]),
// );

//---------------------------------------------------------------------------------

const getDataByKey = (arr = [], key = "dept") => {
  return arr.reduce((acc, el) => {
    const val = el[key];
    if (!acc[val]) {
      acc[val] = [];
    }
    acc[val].push(el);

    return acc;
  }, {});
};

let arr = [
  { name: "user1", dept: "IT" },
  { name: "user2", dept: "HR" },
  { name: "user3", dept: "IT" },
  { name: "user2", dept: "CS" },
];

// console.log(getDataByKey(arr, "name"));

//---------------------------------------------------------------------------------

//Create a custom compare function

const customCompare = (a, b) => {
  if (typeof a !== typeof b) {
    console.log("---->", a, b);
    throw new TypeError("Type of values should be same");
  }

  // Handle Null
  if (a === null || b === null) return a === b;

  // Handle NaN
  if (Number.isNaN(a) && Number.isNaN(b)) return true;

  if (typeof a !== "object") {
    return a === b;
  }

  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    return a.every((e, i) => customCompare(e, b[i]));
  }

  //Object

  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (let key of Object.keys(a)) {
    if (!b.hasOwnProperty(key)) return false;
    if (!customCompare(a[key], b[key])) return false;
  }

  return true;
};

// console.log(customCompare(5, 5)); // true
// console.log(customCompare("abc", "abc")); // true
// console.log(customCompare(true, false)); // false
// console.log(customCompare(null, null)); // true
// console.log(customCompare([1, 2], [1, 2])); // true
// console.log(customCompare([1, 2], [2, 1])); // false
// console.log(customCompare({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
// console.log(customCompare({ a: { b: 1 } }, { a: { b: 2 } })); // false

//---------------------------------------------------------------------------------

const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Charlie" },
  { id: 5, name: "Alice" },
  { id: 6, name: "Bob" },
];

const data2 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "John" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Tom" },
  { id: 2, name: "ALice" },
  { id: 4, name: "Bobby" },
];

const findDuplicates = (arr = [], key) => {
  let seen = {};
  let duplicates = [];

  for (let data of arr) {
    const value = data[key];

    if (seen.hasOwnProperty(value)) {
      if (seen[value] === 1) duplicates.push(data);
      seen[value]++;
    } else {
      seen[value] = 1;
    }
  }

  return duplicates;
};

// console.log(findDuplicates(data2, "id"));
// console.log(findDuplicates(data, "name"));
//---------------------------------------------------------------------------------

const version = [
  "1.0.5",
  "2.5.0",
  "0.12.0",
  "1.0.0",
  "1.23.45",
  "1.4.50",
  "1.2.3.",
];

const sortVersions = (arr = []) => {
  return arr
    .sort((a, b) => {
      const aParts = a.split(".").map(Number);
      const bParts = b.split(".").map(Number);

      const maxLen = Math.max(aParts.length, bParts.length);

      for (let i = 0; i < maxLen; i++) {
        const aVal = aParts[i] || 0;
        const bVal = bParts[i] || 0;

        if (aVal !== bVal) {
          return aVal - bVal;
        }
      }
      return 0;
    })
    .join(" -> ");
};

// console.log(sortVersions(version));

//---------------------------------------------------------------------------------

const movies = [
  { id: 1, name: "Iron man", year: 2008 },
  { id: 2, name: "Spider man", year: 2012 },
];

const ratings = [
  { id: 1, movieId: 1, rating: 8 },
  { id: 2, movieId: 1, rating: 10 },
  { id: 3, movieId: 2, rating: 7 },
  { id: 4, movieId: 2, rating: 7 },
];

const buildRatingMap = () => {
  const map = {};

  for (const { movieId, rating } of ratings) {
    if (!map[movieId]) {
      map[movieId] = { total: 0, count: 0 };
    }
    map[movieId].total += rating;
    map[movieId].count++;
  }

  return map;
};
const getAvgRating = () => {
  return movies.map((movie) => {
    let total = 0;
    let count = 0;
    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i].movieId === movie.id) {
        total += ratings[i].rating;
        count++;
      }
    }

    const averageRating = total === 0 ? 0 : total / count;

    return { ...movie, averageRating };
  });
};

const getFilteredMovies = (name = "", rating) => {
  let result = getAvgRating();

  if (name) {
    result = result.filter((m) =>
      m.name.toLowerCase().includes(name.toLowerCase()),
    );
  }
  if (rating) {
    result = result.filter((m) => m.averageRating >= rating);
  }

  return result;
};

// console.log(buildRatingMap());
// console.log(getFilteredMovies(null, null)); //all movies
// console.log(getFilteredMovies("iron", null)); //all movies where name contains iron
// console.log(getFilteredMovies(null, 8)); //all movies where average rating is more than 8
// console.log(getFilteredMovies("Spider", 7)); //all movies where average rating is more than 8 and nam
//---------------------------------------------------------------------------------

//Short by status and populatity

function shortRecords(arr = []) {
  return arr.sort((a, b) => {
    if (a.status !== b.status) {
      return b.status - Number(a.status);
    }

    return a.popularityIndex - b.popularityIndex;
  });
}

var productArr = [
  {
    name: "P1",
    status: true,
    popularityIndex: 1,
  },
  {
    name: "P2",
    status: false,
    popularityIndex: 2,
  },
  {
    name: "P3",
    status: true,
    popularityIndex: 3,
  },
];

// console.log(shortRecords(productArr));

//---------------------------------------------------------------------------------

const getAverage = (arr = []) => {
  if (!arr.length) return 0;

  return arr.map((student) => {
    const marks = Array.isArray(student.marks) ? student.marks : [];
    const total = marks.reduce((acc, mark) => (acc += mark), 0);
    const averageMarks = marks.length ? Math.floor(total / marks.length) : 0;

    return {
      ...student,
      averageMarks,
    };
  });
};
const students = [
  { name: "Alice", marks: [80, 75, 90] },
  { name: "Bob", marks: [95, 82, 88] },
];

// console.log(getAverage(students));
//---------------------------------------------------------------------------------

const countFruits = (arr = []) => {
  if (!Array.isArray(arr) || !arr.length) return {};

  let countObj = {};

  for (let i = 0; i < arr.length; i++) {
    countObj[arr[i]] = (countObj[arr[i]] || 0) + 1;
  }

  return countObj;
};

const fruits = [
  "banana",
  "apple",
  "orange",
  "banana",
  "orange",
  "apple",
  "apple",
];

// console.log(countFruits(fruits));

//---------------------------------------------------------------------------------
// Veltris | Toyota Corporation

const getAveragePrice = (cart = [], category = "") => {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    if (
      item.category?.toLowerCase() === category.toLowerCase() &&
      typeof item.price === "number"
    ) {
      count++;
      sum += item.price;
    }
  }

  return count ? sum / count : 0;
};

// const arr = [
//   { category: "electronics", price: 100 },
//   { category: "Fruits", price: 80 },
//   { category: "electronics", price: 100 },
//   { category: "Grocery", price: 120 },
//   { category: "electronics", price: 100 },
//   { category: "Fruits", price: 100 },
//   { category: "electronics", price: 100 },
// ];

// console.log(getAveragePrice(arr, "Fruits"));
//---------------------------------------------------------------------------------

//TODO
const getSubset = (arr = [], target) => {};

// console.log(getSubset([2, 5, 1, 4, 3], 10));
// Examples:

// Input: arr[] = [5, 2, 3, 10, 6, 8], target = 10
// Output: 3
// Explanation: The subsets {5, 2, 3}, {2, 8}, and {10} sum up to the target 10.

//---------------------------------------------------------------------------------

// String Permutation Problem

const getPermutation = (str) => {
  if (str.length <= 1) return [str];

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const rest = str.slice(0, i) + str.slice(i + 1);

    for (const perm of getPermutation(rest)) {
      result.push(char + perm);
    }
  }

  return result;
};

// console.log(getPermutation("ABC"));

//---------------------------------------------------------------------------------
// DIOS

const findMinMax = (arr = []) => {
  let max = -Infinity;
  let min = Infinity;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  return [sum - max, sum - min];
};

// console.log(findMinMax([7, 69, 2, 221, 8974]));

//---------------------------------------------------------------------------------

// Reverse Words in a Sentence

const reverseWords = (str = "") => {
  return str
    .split(" ")
    .map((word) => [...word].reverse().join(""))
    .join(" ");
};

// let input = "olleh dlrow"; //Hellow World

// console.log(reverseWords(input));

//---------------------------------------------------------------------------------
//Group by First Char

const groupByFirstChar = (arr = []) => {
  return arr.reduce((acc, el) => {
    const firstChar = el.charAt(0);

    if (firstChar in acc) {
      acc[firstChar].push(el);
    } else {
      acc[firstChar] = [el];
    }

    return acc;
  }, {});
};

// let countryArr = ["India", "Australia", "Swedone", "Italy", "Spane"];

// console.log(groupByFirstChar(countryArr));

//---------------------------------------------------------------------------------

//Genpect

const rotate = (arr = [], times = 0) => {
  if (!arr.length) return arr;
  const k = times % arr.length; // normalize rotations
  return arr.slice(-k).concat(arr.slice(0, -k));
};

// let arr = [1, 2, 3, 4, 5];
// console.log(rotate(arr, 3));

//---------------------------------------------------------------------------------

//Wipro
const moveZeroes = (nums) => {
  let pos = 0; // pointer for non-zero placement

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i]; // move non-zero forward
      pos++;
    }
  }

  // Fill remaining positions with zeros
  while (pos < nums.length) {
    nums[pos] = 0;
    pos++;
  }

  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]

//---------------------------------------------------------------------------------

const getDuplicates = (input = []) => {
  let seen = new Set();
  let duplicates = new Set();

  for (let key of input) {
    if (seen.has(key)) {
      duplicates.add(key);
    } else {
      seen.add(key);
    }
  }

  return [...duplicates];
};

const removeDuplicate = (input = []) => {
  let result = [];

  let seen = new Set();

  for (let i = 0; i < input.length; i++) {
    if (!seen.has(input[i])) {
      result.push(input[i]);
      seen.add(input[i]);
    }
  }

  return result;
};

let input = [1, 2, 4, 1, 3, 5, 3, 2, 1, 1];

// console.log(removeDuplicate(input));
// console.log(getDuplicates(input));

//---------------------------------------------------------------------------------

const flatArray = (arr = []) => {
  return arr.reduce((result, el) => {
    if (Array.isArray(el)) {
      result = [...result, ...flatArray(el)];
    } else {
      result.push(el);
    }
    return result;
  }, []);
};

// let arr = [2, 4, [2, 8, 6], 7, 9, [3, 2, [4, 2, [1, 2]]]];

// console.log(flatArray(arr));

//---------------------------------------------------------------------------------

// Write a program to , Find elements which are present in first array and not in second

const findArr = (a = [], b = []) => {
  let set = new Set(b);

  return a.filter((num) => !set.has(num));
};

let a = [1, 2, 3, 4, 5, 10];
let b = [2, 3, 1, 0, 5];

// console.log(findArr(a, b)); // [4, 10]

//---------------------------------------------------------------------------------

var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const findPath = (obj = {}, path) => {
  const pathArr = path.split(".");

  for (let i = 0; i < pathArr.length; i++) {
    let key = pathArr[i];

    if (obj.hasOwnProperty(key)) {
      obj = obj[key];
    } else {
      return undefined;
    }
  }

  return obj;
};

// console.log(findPath(obj, "a.b.c")); // 12
// console.log(findPath(obj, "a.b")); // {c: 12, j: false}
// console.log(findPath(obj, "a.b.d")); // undefined
// console.log(findPath(obj, "a.c")); // undefined
// console.log(findPath(obj, "a.b.c.d")); // undefined
// console.log(findPath(obj, "a.b.c.d.e")); // undefined
// console.log(findPath(obj, "a.b.j")); //false
// console.log(findPath(obj, "a.b.j.k")); //undefined
// console.log(findPath(obj, "a.k")); //null
//---------------------------------------------------------------------------------

//Concert AI
const idList = {
  user1: {
    id: 1,
  },
  user2: {
    id: 2,
  },
};

const addressObj = {
  1: "Bangalore, Karnataka, India",
  2: "Mysore, Karnataka, India",
  3: "New Delhi, NCR, India",
};

const nameList = {
  1: {
    name: {
      fullName: "Alan",
    },
  },
  2: {
    name: {
      fullName: "John",
    },
  },
  3: {
    name: {
      fullName: "Mike",
    },
  },
};

// return  [id, name, fullName]
const getUserDetails = (list = {}, nameList, addressObj) => {
  return Object.keys(list).reduce((result, key) => {
    const { id } = list[key];
    const { fullName } = nameList[id].name;
    const address = addressObj[id];

    result.push([id, fullName, address]);
    return result;
  }, []);
};

// console.log(getUserDetails(idList, nameList, addressObj));
//---------------------------------------------------------------------------------

// Filter palindrome numbers from the array, compute the sum of digits for each palindrome, and return their total sum.

const checkPalindromeAndSum = (arr = []) => {
  function checkPalindrome(n) {
    n = n.toString();
    return Array.from(n).reverse().join("") === n;
  }

  function add(n) {
    return n
      .toString()
      .split("")
      .reduce((sum, n) => (sum += parseInt(n)), 0);
  }

  return arr.filter(checkPalindrome).reduce((sum, n) => sum + add(n), 0);
};

// console.log(checkPalindromeAndSum([11, 22, 134]));
//---------------------------------------------------------------------------------

//Find Max

const findMax = (arr = []) => {
  return arr.length
    ? arr.reduce((max, curr) => Math.max(max, curr), -Infinity)
    : undefined;
};
// console.log(findMax([1, 2, 3, 4, 122, 3, 56]));

//---------------------------------------------------------------------------------

const users = [
  { fname: "A", lname: "K", age: 23 },
  { fname: "B", lname: "L", age: 30 },
  { fname: "C", lname: "M", age: 19 },
  { fname: "D", lname: "N", age: 30 },
  { fname: "E", lname: "O", age: 25 },
];

function GetUserInfo(users) {
  return {
    getFullName: () => {
      return users.reduce((acc, user) => {
        acc.push(user.fname + user.lname);
        return acc;
      }, []);
    },

    getAgeCount: () => {
      return users.reduce((res, user) => {
        res[user.age] = (res[user.age] || 0) + 1;
        return res;
      }, {});
    },

    getFilteredAge: (age) => {
      return users.find((user) => user.age === age);
    },
  };
}

// const user = GetUserInfo(users);

// console.log(user.getFullName());
// console.log(user.getAgeCount());
// console.log(user.getFilteredAge(288));

//---------------------------------------------------------------------------------

const authors = [
  {
    id: "1",
    name: "J.K. Rowling",
    bookIds: ["1", "2"],
  },
  {
    id: "2",
    name: "George R.R. Martin",
    bookIds: ["3", "4"],
  },
  {
    id: "3",
    name: "J.R.R. Tolkien",
    bookIds: ["5", "6"],
  },
];

const books = [
  {
    id: "1",
    title: "Harry Potter and the Philosopher's Stone",
    publishedYear: 1997,
    authorId: "1",
  },
  {
    id: "2",
    title: "Harry Potter and the Chamber of Secrets",
    publishedYear: 1998,
    authorId: "1",
  },
  {
    id: "3",
    title: "A Game of Thrones",
    publishedYear: 1996,
    authorId: "2",
  },
  {
    id: "4",
    title: "A Clash of Kings",
    publishedYear: 1998,
    authorId: "2",
  },
  {
    id: "5",
    title: "The Fellowship of the Ring",
    publishedYear: 1954,
    authorId: "3",
  },
  {
    id: "6",
    title: "The Two Towers",
    publishedYear: 1954,
    authorId: "3",
  },
];

const getData = () => {
  booksWithAuthor = books.map((book) => {
    let authDetails = authors.find((auth) => auth.id === book.authorId);
    return { ...book, authDetails };
  });

  authorWithBooks = authors.map((auth) => {
    return {
      ...auth,
      books: books
        .filter((book) => auth.bookIds.includes(book.id))
        .map((book) => book.title),
    };
  });
  return {
    authors,
    books,
    booksWithAuthor,
    authorWithBooks,
  };
};

// console.log(getData().booksWithAuthor);
// console.log(getData().authorWithBooks);

//---------------------------------------------------------------------------------

// Maersk

const products = [
  { name: "product 1", price: 10, quantity: 2 },
  { name: "product 2", price: 8, quantity: 0 },
  { name: "product 3", price: 5, quantity: 2 },
  { name: "product 4", price: 2, quantity: 2 },
];

/* write a function
 * it should accept an array
 * have to filter the array where quantity is greater than 0 - done
 * update price value with quantity and price - done
 * Return sum of all products */

const processProducts = (items = []) => {
  // hanlde Edge cases
  if (!Array.isArray(items)) throw new Error("Invalid Input");

  const filteredRecords = items.filter((item) => item.quantity > 0);

  const updatedRecords = filteredRecords.map((item) => ({
    ...item,
    totalPrice: item.price * item.quantity,
  }));

  // sum
  return updatedRecords.reduce((sum, item) => (sum += item.totalPrice), 0);
};
// console.log(processProducts(products));

//---------------------------------------------------------------------------------

//  Filter anagrams

const filterAnagrams = (arr = []) => {
  let map = new Map();

  for (let item of arr) {
    let sorted = item.toLowerCase().split("").sort().join("");
    map.set(sorted, item);
  }

  return Array.from(map.values());
};

// console.log(
//   filterAnagrams([
//     "nap",
//     "teachers",
//     "cheaters",
//     "PAN",
//     "ear",
//     "era",
//     "hectares",
//   ]),
// );
//---------------------------------------------------------------------------------
