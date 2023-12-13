import "./App.css";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Image from "./components/Image";
function App() {
  let firstName = "Ahmed Mbarki";
  return (
    <div className="App">
      {firstName ? <h1>hello {firstName}</h1> : <h1>Hello there!</h1>}
      <div className="card">
        <Image />
        <Name />
        <Price />
        <Description />
      </div>
    </div>
  );
}

export default App;
