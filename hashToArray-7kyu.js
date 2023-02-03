// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}

// should be converted into
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

// Note: The output array should be sorted alphabetically by key name.

const convertHashToArray = (hash) => {
  let arr = [];
  let sortedHash = Object.keys(hash)
    .sort()
    .reduce((obj, key) => {
      obj[key] = hash[key];
      return obj;
    }, {});

  for (key in sortedHash) {
    arr.push([key, sortedHash[key]]);
  }
  return arr;
};

console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
);
