const MoveZero = () => {
  const removeZeros = (nums) => {
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        [nums[left], nums[i]] = [nums[i], nums[left]];
        left++;
      }
    }
    return nums;
  };
  return (
    <div>
      <code>
        Given an integer array nums, move all 0's to the end of it while
        maintaining the relative order of the non-zero elements. Note that you
        must do this in-place without making a copy of the array.
      </code>
      <div>Input: nums = [0,1,0,3,12]</div>
      <div>{`Output : ${removeZeros([1, 3, 12, 0, 0])}`}</div>
    </div>
  );
};
export default MoveZero;
