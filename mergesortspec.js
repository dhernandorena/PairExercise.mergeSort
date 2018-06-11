describe('Split Array function', function() {
  it('is able to split an even array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it('is able to split an odd array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  });
});

describe('Mwrge Array function', function() {
  it('is able to merge two sorted arrays into a single sorted array', function() {
    expect(merge([1, 2, 8, 10], [7, 8, 9, 11])).toEqual([1, 2, 7, 8, 8, 9, 10, 11]);
  });
  it('is able to merge two sorted mismatched arrays into a single sorted array', function() {
    expect(merge([3, 6, 9], [5, 7, 10, 12])).toEqual([3, 5, 6, 7, 9, 10, 12])
  });
  // it('is able to split an odd array into two halves', function() {
  //   expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  // });
});


xdescribe('Merge Sort', function() {
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
