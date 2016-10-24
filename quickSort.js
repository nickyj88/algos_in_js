function quickSort(nums){
  const len = nums.length
  if (len <= 1) {
    return nums
  }
  const left = []
  const right = []
  const pivot = nums[len - 1]
  
  for (let i = 0; i < len - 1; i++) {
    nums[i] < pivot ? left.push(nums[i]) : right.push(nums[i])
  } 
  return [...quickSort(left), pivot, ...quickSort(right)]
}

// unit tests with jasmine
describe('quickSort', function() {
  it('quicksort an array', () => {
    const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
    const answer = quickSort(input);
    
    expect(answer).toEqual([1,2,3,4,5,6,7,8,9,10]);

  });
});