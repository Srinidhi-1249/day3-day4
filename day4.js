function isSimilar(obj1, obj2) {
    // Check if the types of obj1 and obj2 are the same
    if (typeof obj1 !== typeof obj2) {
      return false;
    }

    // Handle Array instances
    if (Array.isArray(obj1)) {
      // Check if the lengths of the arrays are the same
      if (obj1.length !== obj2.length) {
        return false;
      }

      // Recursively compare each element of the arrays
      for (let i = 0; i < obj1.length; i++) {
        if (!isSimilar(obj1[i], obj2[i])) {
          return false;
        }
      }
      return true;
    }

    // Handle Map instances
    if (obj1 instanceof Map) {
      // Check if the sizes of the maps are the same
      if (obj1.size !== obj2.size) {
        return false;
      }

      // Recursively compare each key-value pair of the maps
      for (const [key, value] of obj1.entries()) {
        if (!isSimilar(value, obj2.get(key))) {
          return false;
        }
      }
      return true;
    }

    // Handle Object instances
    if (typeof obj1 === 'object' && obj1 !== null) {
      // Get the keys of both objects
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);

      // Check if the number of keys is the same
      if (keys1.length !== keys2.length) {
        return false;
      }

      // Recursively compare each property of the objects
      for (const key of keys1) {
        if (!isSimilar(obj1[key], obj2[key])) {
          return false;
        }
      }
      return true;
    }

    // Handle other types (numbers, strings, booleans, etc.)
    return obj1 === obj2;
  }
  console.log(isSimilar(
    ["cars", "trains", ["roads", ["railways"]]],
    ["cars", "trains", ["roads", ["railways"]]]
  )); // Output: true

  console.log(isSimilar(
    {"pairs": [[3, 5], [1, 7], [2, 6], [0, 8]]},
    {"pairs": [[3, 5], [1, 1], [2, 6], [0, 8]]}
  )); // Output: false

  console.log(isSimilar(
    {"Sam": 4, "Elliot": 4, "equality": true},
    {"Sam": 4, "Elliot": 5, "equality": false}
  )); // Output: false

  console.log(isSimilar(
    [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}],
    [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}]
  )); // Output: true