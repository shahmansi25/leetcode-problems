import IntercesctionTwoArray from "./HashMap/IntercesctionTwoArray";
import TwoSum from "./HashMap/TwoSum";
import UniqueChar from "./HashMap/UniqueChar";
import ValidParentheses from "./Stack/ValidParentheses";
import MoveZero from "./Stack/moveZero";


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
        <li> Move Zeros
          <MoveZero/>
        </li>
      </ol>
      </>
  );
}

export default App;
