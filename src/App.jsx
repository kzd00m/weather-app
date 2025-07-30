import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import styles from './App.module.css';

// Weather App Component - moved outside to prevent re-creation on every render
const WeatherApp = ({ city, setCity, fetchWeather, weather }) => (
  <div className={styles.weatherBox}>
    <h1 className={styles.title}>Weather App</h1>
    {/* Search bar and button */}
    <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
    {/* Weather result appears below search bar after search */}
    <div className={styles.result}>
      <WeatherCard weather={weather} />
    </div>
  </div>
);

/**
 * The main App component sets up routing and manages weather app state.
 */
function App() {
  // State to hold the current city input by the user
  const [city, setCity] = useState('');
  // State to hold the fetched weather data
  const [weather, setWeather] = useState(null);

  /**
   * Fetches weather data for the specified city from OpenWeatherMap API.
   * If the city is found, updates the weather state; otherwise, shows an alert.
   */
  const fetchWeather = async () => {
    if (!city) return; // Do nothing if city is empty
    try {
      const res = await fetch(
        // Fetch weather data for the given city using your API key
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2129d2669692b81500521b83d7b0e5c3&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data); // Update weather state if successful
      } else {
        alert('City not found.');
        setWeather(null); // Clear weather state if city not found
      }
    } catch (err) {
      console.error(err); // Log any errors to the console
    }
  };

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/weather" className={styles.navLink}>Weather</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
        </nav>
        <Routes>
          {/* Home route displays the welcome page */}
          <Route path="/" element={<Home />} />
          {/* Weather route displays the weather app UI */}
          <Route path="/weather" element={
            <WeatherApp 
              city={city} 
              setCity={setCity} 
              fetchWeather={fetchWeather} 
              weather={weather}
            />
          } />
          {/* About route displays the About page */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
