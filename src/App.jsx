import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

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
      {/* Navigation bar with links to Home and About pages */}
      <nav className="bg-blue-700 p-4 flex gap-4">
        <Link to="/" className="text-white hover:underline">Home</Link>
        <Link to="/about" className="text-white hover:underline">About</Link>
      </nav>
      <Routes>
        {/* Home route displays the weather app UI */}
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-600 p-6 flex flex-col items-center">
            <h1 className="text-white text-4xl font-bold mb-6">Weather App</h1>
            {/* SearchBar allows user to input city and trigger fetchWeather */}
            <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
            {/* WeatherCard displays weather data if available */}
            <WeatherCard weather={weather} />
          </div>
        } />
        {/* About route displays the About page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

/*
# Weather App

This is a simple React weather application that allows users to search for the current weather in any city using the OpenWeatherMap API. The app features a clean, modern UI built with Tailwind CSS and includes navigation between a Home (weather search) and About page.

## Features
- Search for current weather by city name
- Displays city, weather description, temperature, and icon
- Responsive and modern design using Tailwind CSS
- Navigation between Home and About pages using React Router

## How to Use
1. Enter a city name in the search bar on the Home page.
2. Click the "Search" button to fetch and display the current weather for that city.
3. Navigate to the About page to see additional information about the app (placeholder).

## Setup
- Requires Node.js and npm installed.
- Install dependencies with `npm install`.
- Start the development server with `npm run dev`.
- Make sure to provide your own OpenWeatherMap API key in `App.jsx` if you want to use your own key.

---

*/

export default App;
