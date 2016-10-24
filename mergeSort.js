function mergeSort(nums){
  if (nums.length < 2) {
    return nums
  }
  const len = nums.length
  const mid = Math.round(len/2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid, len)
  return stitch(mergeSort(left), mergeSort(right))
}

function stitch(left, right){
  const merged = []
  while (left.length && right.length){
  left[0] <= right[0] ? merged.push(left.shift()) : merged.push(right.shift())
  return merged.concat(left, right)
}


// unit test with jasmine
describe('merge sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    var ans = mergeSort(nums);
    expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});