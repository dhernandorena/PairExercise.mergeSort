describe('Split Array function', function() {
  it('is able to split an even array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it('is able to split an odd array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  });
});

describe('Merge Sort', function() {
  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });
  it('handles a singleton', function() {
    expect(mergeSort([1])).toEqual([1]);
  });
  it('handles a sorted array', function() {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it('handles an reversed array', function() {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  it('handles a random array', function() {
    expect(mergeSort([2, 1, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
