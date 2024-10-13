/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const len = nums.length;
  let cur;
  let count = 0;
  for (let i = 0; i < len; i++) {
    cur = nums[i];
    if (cur !== val) {
      nums[count] = cur;
      count++;
    }
  }
  return count;
};
