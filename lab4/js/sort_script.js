//метод обміну:
function sortExchange(arr, filter = "Ascending") {
  let comparisons = 0;
  let swaps = 0;
  
  for (let i = arr.length - 1; i > 0; i--) {
    let counter = 0;
    for (let j = 0; j < i; j++) {
      comparisons++;
      if (arr[j] === undefined && arr[j + 1] !== undefined) {
        let tempData = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempData;
        counter++;
        swaps++;
        continue;
      }
      
      comparisons++;
      if (arr[j + 1] === undefined) continue;
      
      if (filter === "Ascending") {
        comparisons++;
        if (arr[j] > arr[j + 1]) {
          let tempData = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tempData;
          counter++;
          swaps++;
        }
      } else if (filter === "Descending") {
        comparisons++;
        if (arr[j] < arr[j + 1]) {
          let tempData = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tempData;
          counter++;
          swaps++;
        }
      }
    }
    if (counter === 0) {
      break;
    }
  }
  
  console.log(`Метод обміну (${filter}): ${comparisons} порівнянь, ${swaps} обмінів`);
  return arr;
}

//Метод мінімальних елементів:
function sortMinElements(arr, filter = "Ascending") {
  let comparisons = 0;
  let swaps = 0;
  
  for (let i = 0; i < arr.length - 1; i++) {
    let extremumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      comparisons++;
      if (arr[j] === undefined) continue;
      
      comparisons++;
      if (arr[extremumIndex] === undefined) {
        extremumIndex = j;
        continue;
      }
      
      if (filter === "Ascending") {
        comparisons++;
        if (arr[j] < arr[extremumIndex]) {
          extremumIndex = j;
        }
      } else if (filter === "Descending") {
        comparisons++;
        if (arr[j] > arr[extremumIndex]) {
          extremumIndex = j;
        }
      }
    }

    comparisons++;
    if (extremumIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[extremumIndex];
      arr[extremumIndex] = temp;
      swaps++;
    }
  }
  
  console.log(`Метод мінімальних елементів (${filter}): ${comparisons} порівнянь, ${swaps} обмінів`);
  return arr;
}

//метод вставок:
function sortInserts(arr, filter = "Ascending") {
  let comparisons = 0;
  let moves = 0;
  
  let lastDefinedIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    comparisons++; 
    if (arr[i] !== undefined) {
      comparisons++;
      if (i !== lastDefinedIndex) {
        let temp = arr[i];
        arr[i] = arr[lastDefinedIndex];
        arr[lastDefinedIndex] = temp;
        moves++;
      }
      lastDefinedIndex++;
    }
  }
  
  const definedLength = lastDefinedIndex;
  
  for (let i = 1; i < definedLength; i++) {
    let tempData = arr[i];
    let j = i - 1;
    
    if (filter === "Ascending") {
      while (j >= 0) {
        comparisons++;
        if (arr[j] > tempData) {
          arr[j + 1] = arr[j];
          moves++;
          j--;
        } else {
          break;
        }
      }
    } else if (filter === "Descending") {
      while (j >= 0) {
        comparisons++;
        if (arr[j] < tempData) {
          arr[j + 1] = arr[j];
          moves++;
          j--;
        } else {
          break;
        }
      }
    }
    
    arr[j + 1] = tempData;
    moves++;
  }
  
  console.log(`Метод вставок (${filter}): ${comparisons} порівнянь, ${moves} переміщень`);
  return arr;
}

//метод Шелла:
function sortShell(arr, filter = "Ascending") {
  let comparisons = 0;
  let moves = 0;
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      let j = i;
      
      if (filter === "Ascending") {
        while (j >= gap) {
          comparisons += 2;
          if ((arr[j - gap] === undefined) || (temp !== undefined && arr[j - gap] > temp)) {
            arr[j] = arr[j - gap];
            moves++;
            j -= gap;
          } else {
            break;
          }
        }
      } else if (filter === "Descending") {
        while (j >= gap) {
          comparisons += 2;
          if (arr[j - gap] !== undefined && (temp === undefined || arr[j - gap] < temp)) {
            arr[j] = arr[j - gap];
            moves++;
            j -= gap;
          } else {
            break;
          }
        }
      }
      
      arr[j] = temp;
      if (j !== i) moves++;
    }
    gap = Math.floor(gap / 2);
  }
  
  console.log(`Метод Шелла (${filter}): ${comparisons} порівнянь, ${moves} переміщень`);
  return arr;
}

//метод Хоара (швидке сортування):
function sortHoara(arr, filter = "Ascending", stats = { comparisons: 0, moves: 0 }) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];
  const undefinedValues = [];

  for (let num of arr) {
    stats.comparisons++; 
    if (num === undefined) {
      undefinedValues.push(num);
      stats.moves++;
    } else {
      stats.comparisons++;
      if (num < pivot) {
        left.push(num);
        stats.moves++;
      } else if (num > pivot) {
        stats.comparisons++;
        right.push(num);
        stats.moves++;
      } else {
        equal.push(num);
        stats.moves++;
      }
    }
  }

  if (filter === "Ascending") {
    const result = [
      ...sortHoara(left, filter, stats), 
      ...equal, 
      ...sortHoara(right, filter, stats), 
      ...undefinedValues
    ];
    return result;
  } else {
    const result = [
      ...sortHoara(right, filter, stats), 
      ...equal, 
      ...sortHoara(left, filter, stats), 
      ...undefinedValues
    ];
    return result;
  }
}

function sortHoaraWithStats(arr, filter = "Ascending") {
  const stats = { comparisons: 0, moves: 0 };
  const result = sortHoara(arr, filter, stats);
  console.log(`Метод Хоара (${filter}): ${stats.comparisons} порівнянь, ${stats.moves} переміщень`);
  return result;
}

let data = [2, 6, undefined, 3, 7, 8, 4, 2, 10, undefined];

console.log("\nТестування методів сортування з підрахунком операцій:");

console.log("\nМетод обміну:");
console.log(sortExchange([...data]));
console.log(sortExchange([...data], "Descending"));

console.log("\nМетод мінімальних елементів:");
console.log(sortMinElements([...data]));
console.log(sortMinElements([...data], "Descending"));

console.log("\nМетод вставок:");
console.log(sortInserts([...data]));
console.log(sortInserts([...data], "Descending"));

console.log("\nМетод Шелла:");
console.log(sortShell([...data]));
console.log(sortShell([...data], "Descending"));

console.log("\nМетод Хоара:");
console.log(sortHoaraWithStats([...data]));
console.log(sortHoaraWithStats([...data], "Descending"));