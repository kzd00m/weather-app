import { Link } from 'react-router-dom';
import styles from './Home.module.css';

// Home page component
export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to Weather App</h1>
      <div className={styles.content}>
        <p>Get real-time weather information for any city around the world.</p>
        <p>Simply enter a city name and click search to get current weather conditions including temperature, humidity, and more.</p>
        <div className={styles.features}>
          <h2>Quick Features:</h2>
          <ul>
            <li>🌡️ Current temperature</li>
            <li>💨 Wind speed and direction</li>
            <li>💧 Humidity levels</li>
            <li>☁️ Weather conditions</li>
          </ul>
        </div>
        <div className={styles.cta}>
          <Link to="/weather" className={styles.weatherButton}>
            Get Weather Info
          </Link>
        </div>
      </div>
    </div>
  );
}
  