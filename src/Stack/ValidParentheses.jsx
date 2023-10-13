const ValidParentheses = () => {
  const checkValid = (s) => {    
    const tempStack  = []
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        tempStack.push(s[i])
      } else {
        if (!tempStack.length || (s[i] === ')' && tempStack[tempStack.length - 1] !== '(')
          || (s[i] === '}' && tempStack[tempStack.length - 1] !== '{') ||
          (s[i] === ']' && tempStack[tempStack.length - 1] !== '[')) {
          return false
        }
        tempStack.pop()
      }  
    }
    return !tempStack.length
  }
  return (
  <div>
      <code>
     Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
      </code>   
      <div>Example 1: Input: s = "()"</div>
      <div>{`Output : ${checkValid("()")}`}</div>
      <div> Example 2: Input: s = "()[]{}"</div>
      <div>{`Output : ${checkValid("()[]{}")}`}</div>
    </div>
)
}
export default ValidParentheses