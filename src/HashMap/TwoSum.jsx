const TwoSum = () => {
  const sums = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i+1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === target) {
            return [i, j]
          }
      }    
    }
  }
  return (
    <div>
      <code>
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.
      </code>   
      <div>Example 1: Input: nums = [2,7,11,15], target = 9</div>
      <div>{`Output : ${sums([2,7,11,15], 6)}`}</div>
      <div> Example 2: Input: nums = [3,2,4], target = 6</div>
      <div>{`Output : ${sums([3, 2, 4], 6)}`}</div>
    </div>
  )
}

export  default TwoSum