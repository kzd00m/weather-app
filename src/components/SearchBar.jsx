// SearchBar component allows the user to input a city name and search for weather
export default function SearchBar({ city, setCity, fetchWeather }) {
    return (
      <form 
        className="flex gap-2 justify-center mb-6"
        // When the form is submitted, prevent default and call fetchWeather
        onSubmit={(e) => {
          e.preventDefault(); // Prevent page reload
          fetchWeather(); // Fetch weather data for the entered city
        }}
      >
        <input
          type="text"
          className="px-4 py-2 rounded-md shadow w-64"
          placeholder="Enter city name..."
          value={city} // Controlled input: value comes from city state
          onChange={(e) => setCity(e.target.value)} // Update city state as user types
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    );
  }
  