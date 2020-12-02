import "./App.css";
import WeatherPage from "./WeatherPage"; 

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherPage defaultCity="Aberdeen" />
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
    </div>
  );
}
export default App;
