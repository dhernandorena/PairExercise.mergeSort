function split(wholeArray) {
  return [
    wholeArray.slice(0, Math.floor(wholeArray.length / 2)),
    wholeArray.slice(Math.floor(wholeArray.length / 2)),
  ];
}
