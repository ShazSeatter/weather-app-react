import "./App.css";
import WeatherPage from "./WeatherPage";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherPage defaultCity="Aberdeen" />
      </div>
    </div>
  );
}
export default App;
