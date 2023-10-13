const UniqueChar = () => {
  const uniqueVal = (s) => {
    let obj ={}
    for (let i = 0; i < s.length; i++) {
      if (!obj[s[i]]) {
          obj[s[i]] = 1
      } else {
        obj[s[i]] =  obj[s[i]] + 1
      }
    }

    for (let i = 0; i < s.length; i++){
      if(obj[s[i]] === 1) return i
    }
    return -1 
  }
  return (
   <div>
      <code>
      Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
      </code>   
      <div>Example 1: Input: s = "leetcode"  Output: 0</div>
      <div>{`Output : ${uniqueVal("leetcode")}`}</div>
      <div> Example 2: Input: s = "loveleetcode" Output: 2</div>
      <div>{`Output : ${uniqueVal("loveleetcode")}`}</div>
    </div>
)
}
export default UniqueChar