import styles from './WeatherCard.module.css';
// WeatherCard component displays weather information for a city
export default function WeatherCard({ weather }) {
    // If no weather data is available, render nothing
    if (!weather) return null;
  
    return (
      <div className={styles.card}>
        {/* Display the city name */}
        <h2 className={styles.title}>{weather.name}</h2>
        {/* Display the weather description (e.g., Clear sky) */}
        <p className={styles.description}>{weather.weather[0].description}</p>
        {/* Display the weather icon from OpenWeatherMap */}
        <img
          className={styles.icon}
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        {/* Display the temperature in Celsius */}
        <p className={styles.temp}>{weather.main.temp}°C</p>
      </div>
    );
  }
  