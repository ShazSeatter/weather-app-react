import "./App.css";
import WeatherPage from "./WeatherPage";
import WeatherUnitProvider from "./WeatherUnitContext"; 

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherUnitProvider>
        <WeatherPage defaultCity="Aberdeen" />
        </WeatherUnitProvider>
      </div>
    </div>
  );
}
export default App;
