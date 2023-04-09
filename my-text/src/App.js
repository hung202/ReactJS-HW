import { ReactComponent as Edit2 } from "./logo.svg";
import "./App.css";
import Meme from "./1.png";

function App() {
  return (
    <div className="App">
      <img src={Meme}></img>
      <Edit2></Edit2>
    </div>
  );
}

export default App;
