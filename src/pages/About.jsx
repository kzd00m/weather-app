import styles from './About.module.css';

// About page component
export default function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About Weather App</h1>
      <div className={styles.content}>
        <p>Welcome to our Weather App! This application provides real-time weather information for cities around the world.</p>
        <h2>Features:</h2>
        <ul>
          <li>Search for weather by city name</li>
          <li>Real-time temperature data</li>
          <li>Weather conditions and descriptions</li>
          <li>Responsive design for all devices</li>
        </ul>
        <p>Built with React and powered by OpenWeatherMap API.</p>
      </div>
    </div>
  );
}