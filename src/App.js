import IntercesctionTwoArray from "./HashMap/IntercesctionTwoArray";
import TwoSum from "./HashMap/TwoSum";


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
      </ol>
      </>
  );
}

export default App;
