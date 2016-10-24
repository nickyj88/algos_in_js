function bubbleSort(nums) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < nums.length; i++){
      const first = nums[i];
      const next = nums[i + 1];
      if (first > next) {
        nums[i] = next;
        nums[i+1] = first;
        swapped = true;
      }
    }
  } while (swapped)
} 

// unit tests with jasmine
describe('bubble sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    bubbleSort(nums);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});