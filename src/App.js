import "./App.css";
import Header from "./Header";
import Cities from "./Cities";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Cities />
      <Content />
      <div className="Footer">
        <a
          href="https://github.com/ShazSeatter/weather-app-react"
          target="_blank"
          className="git-hub-respo"
        >
          Open source code
        </a>{" "}
        by Shaz Seatter
      </div>
    </div>
  );
}
export default App;
