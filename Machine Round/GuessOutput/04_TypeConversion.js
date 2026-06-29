const logType = (expression, value) => {
  console.log(`${expression} => ${value} (${typeof value})`);
};

let a = "4";
let b = "5";
logType('"" + 1 + 0', "" + 1 + 0);
logType('"" - 1 + 0', "" - 1 + 0);

logType(`"4" + "5" `, "4" + "5");
logType(`"+4" + "+5" `, "+4" + "+5");
logType(`"a" + "b" `, a + b);
logType(`"+a" + "+b" `, +a + +b);

logType("true + false", true + false);
logType('6 / "3"', 6 / "3");
logType('"2" * "3"', "2" * "3");
logType('4 + 5 + "px"', 4 + 5 + "px");
logType('"$" + 4 + 5', "$" + 4 + 5);
logType('"4" - 2', "4" - 2);
logType('"4px" - 2', "4px" - 2);
logType('"  -9  " + 5', "  -9  " + 5);
logType('"  -9  " - 5', "  -9  " - 5);
logType("null + 1", null + 1);
logType("undefined + 1", undefined + 1);
logType('" \t \n" - 2', " \t \n" - 2);

console.log(Boolean("0")); //true
console.log(Boolean(" ")); //true
console.log(Boolean("")); //false

console.log(Number(" ")); //0
console.log(Number("")); //0

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
