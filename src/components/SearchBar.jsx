import styles from './SearchBar.module.css';
// SearchBar component allows the user to input a city name and search for weather
export default function SearchBar({ city, setCity, fetchWeather }) {
    return (
      <form 
        className={styles.form}
        // When the form is submitted, prevent default and call fetchWeather
        onSubmit={(e) => {
          e.preventDefault(); // Prevent page reload
          fetchWeather(); // Fetch weather data for the entered city
        }}
      >
        <input
          type="text"
          className={styles.input}
          placeholder="Enter city name..."
          value={city} // Controlled input: value comes from city state
          onChange={(e) => setCity(e.target.value)} // Update city state as user types
        />
        <button 
          type="submit"
          className={styles.button}
        >
          Search
        </button>
      </form>
    );
  }
  