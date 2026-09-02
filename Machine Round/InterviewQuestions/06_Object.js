const getKeysOfObject = (obj = {}) => {
  let result = [];

  for (let key in obj) {
    //Add key to result

    result.push(key);

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      result.push(...getKeysOfObject(obj[key]));
    }
  }

  return result;
};

const data = {
  company: {
    name: "Acme Corp",
    departments: {
      engineering: {
        manager: "Alice",
        employees: 25,
        technologies: {
          frontend: ["React", "TypeScript"],
          backend: ["Node.js", "Java"],
          database: ["PostgreSQL", "Redis"],
        },
      },
      sales: {
        manager: "Bob",
        employees: 12,
        regions: {
          north: 5,
          south: 3,
          east: 2,
          west: 2,
        },
      },
    },
  },
};

console.log(getKeysOfObject(data));

//------------------------------------------------------------------------

let files = [
  {
    id: 1,
    name: "root",
    type: "folder",
    children: [2, 3],
  },
  {
    id: 2,
    name: "Documents",
    type: "folder",
    children: [4, 5],
  },
  {
    id: 3,
    name: "Downloads",
    type: "folder",
    children: [6, 7, 8],
  },
  {
    id: 4,
    name: "report.pdf",
    type: "file",
    size: 120,
  },
  {
    id: 5,
    name: "resume.docx",
    type: "file",
    size: 80,
  },
  {
    id: 6,
    name: "movie.mp4",
    type: "file",
    size: 1500,
  },
  {
    id: 7,
    name: "music.mp3",
    type: "file",
    size: 300,
  },
  {
    id: 8,
    name: "Photos",
    type: "folder",
    children: [9],
  },
  {
    id: 9,
    name: "vacation.jpg",
    type: "file",
    size: 600,
  },
];

const getSizeById = (id) => {
  let filterData = files.find((file) => file.id === id);

  if (!filterData) return 0;

  if (filterData.type == "file") return filterData.size;

  return filterData.children.reduce(
    (result, id) => (result += getSizeById(id)),
    0,
  );
};

console.log(getSizeById(3));

//------------------------------------------------------------------------
