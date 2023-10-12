const IntercesctionTwoArray = () => {
  const intersection = (nums1, nums2) => {
    let number = []
    for(let i =0; i< nums1.length; i++) {
        for(let j=0;j<nums2.length;j++) {
                if(nums1[i] === nums2[j]) {
                    number.push(nums1[i])
                }
        }
    }
    return [...new Set(number)]
  }
  return(
    <div>
      <code>
        Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you
        may return the result in any order.
      </code>   
      <div>Example 1: Input: nums1 = [1,2,2,1], nums2 = [2,2] Output: [2]</div>
      <div>{`Output : ${intersection([1,2,2,1], [2,2])}`}</div>
      <div> Example 2:Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] Output: [9,4]</div>
      <div>{`Output : ${intersection([4,9,5], [9,4,9,8,4])}`}</div>
    </div>
  )

} 

export default IntercesctionTwoArray