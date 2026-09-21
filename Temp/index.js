const version = [
  "1.0.5",
  "2.5.0",
  "0.12.0",
  "1.0.0",
  "1.23.45",
  "1.4.50",
  "1.2.3.",
];

const sortVersions = (version = []) => {
  return version
    .sort((a, b) => {
      let aParts = a.split(".");
      let bParts = b.split(".");

      let max = Math.max(aParts.length, bParts.length);

      for (let i = 0; i < max; i++) {
        let a = aParts[i] || 0;
        let b = bParts[i] || 0;

        if (a !== b) {
          return a - b;
        }
        return 0;
      }
    })
    .join("->");
};

console.log(sortVersions(version));
