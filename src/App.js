import Test from "./Test1";
import Testt from "./Test2";
import Testtt from "./Test3";

function App() {
  return (
    <div className="App">
      <Test /> 
      {/* 33.7ms */}
      <Testt />
      {/* 28.5ms */}
      <Testtt />
      {/* 32.3ms */}
    </div>
  );
}

export default App;
