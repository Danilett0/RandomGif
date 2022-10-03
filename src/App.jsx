import CityInfo from "./Components/CityInfo/CityInfo";
import Weather from "./Components/Weather/Weather";
import CityList from "./Components/CityList/CityList";
import "./App.css";

function App() {
  return (
    <main className="App-main">

      <CityInfo />
      <Weather />
      <CityList />
      
    </main>
  );
}

export default App;
