import "./App.css";
import axios from "axios";

function App() {
  const url =
    "https://geo.ipify.org/api/v2/country?apiKey=at_007uK5CyJKclEY1wU5Sle8KIdwYOa&ipAddress=8.8.8.8";

  function fetchData() {
    axios
      .get(url)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
