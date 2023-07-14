function getObj(entries) {
    const result = {};

    const marksToIndex = {};
    for (const key in entries) {
      if (entries.hasOwnProperty(key)) {
        const entry = entries[key];
        const marks = entry.marks;
        if (!marksToIndex.hasOwnProperty(marks)) {
          marksToIndex[marks] = key;
        } else {
          const existingIndex = marksToIndex[marks];
          const currentIndex = key;
          if (entries[existingIndex].age > entry.age) {
            marksToIndex[marks] = currentIndex;
          }
        }
      }
    }

    for (const marks in marksToIndex) {
      if (marksToIndex.hasOwnProperty(marks)) {
        const key = marksToIndex[marks];
        result[key] = entries[key];
      }
    }

    return result;
  }

  const entries1 = {
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
  };
  console.log(getObj(entries1));

  const entries2 = {
    0: { age: 18, name: 'john', marks: '400' },
    1: { age: 17, name: 'julie', marks: '400' },
    2: { age: 16, name: 'Robin', marks: '200' },
    3: { age: 16, name: 'Bella', marks: '300' },
    4: { age: 16, name: 'john', marks: '250' },
    5: { age: 15, name: 'julie', marks: '250' }
  };
  console.log(getObj(entries2));