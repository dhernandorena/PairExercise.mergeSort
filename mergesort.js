function split(wholeArray) {
  return [
    wholeArray.slice(0, Math.floor(wholeArray.length / 2)),
    wholeArray.slice(Math.floor(wholeArray.length / 2)),
  ];
}

function merge(array1, array2) {
let newArray = []
  while (array1.length && array2.length) {
    if (array1[0] <= array2[0]) {
      newArray.push(array1.shift())
    } else {
      newArray.push(array2.shift())
    }
  }
  if (array1.length) {
    newArray.push(...array1)
  } else {
    newArray.push(...array2)
  }
  return newArray
}
