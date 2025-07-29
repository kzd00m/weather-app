// WeatherCard component displays weather information for a city
export default function WeatherCard({ weather }) {
    // If no weather data is available, render nothing
    if (!weather) return null;
  
    return (
      <div className="bg-white/20 backdrop-blur-lg text-white p-6 rounded-xl shadow-md text-center">
        {/* Display the city name */}
        <h2 className="text-3xl font-semibold">{weather.name}</h2>
        {/* Display the weather description (e.g., Clear sky) */}
        <p className="text-xl">{weather.weather[0].description}</p>
        {/* Display the weather icon from OpenWeatherMap */}
        <img
          className="mx-auto"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        {/* Display the temperature in Celsius */}
        <p className="text-4xl font-bold">{weather.main.temp} 6;C</p>
      </div>
    );
  }
  