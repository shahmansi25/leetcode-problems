import IntercesctionTwoArray from "./HashMap/IntercesctionTwoArray";
import TwoSum from "./HashMap/TwoSum";
import UniqueChar from "./HashMap/UniqueChar";
import ValidParentheses from "./Stack/ValidParentheses";

function App() {
  return (
     <>
      <div className="App"  style={{textAlign:"center",color:"red" ,fontWeight:"800"}}>
        LeetCode Problems
      </div>
      <ol>
        <li>Two Sum
          <TwoSum />
        </li>
        <li> Intersection of Two Arrays
          <IntercesctionTwoArray />
        </li>
        <li>
          <UniqueChar />
        </li>
        <li> ValidParentheses
          <ValidParentheses/>
        </li>
      </ol>
      </>
  );
}

export default App;
