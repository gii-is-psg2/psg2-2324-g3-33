import React, { useState } from 'react';
import '../App.css';
import '../static/css/home/home.css'; 

export default function Home() {
    const [weatherData, setWeatherData] = useState(null);
    const [mapData, setMapData] = useState(null);

    const fetchWeatherData = () => {
        fetch('/api/v1/weather')
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(error => console.error('Error fetching weather data:', error));
    };

    const fetchMapData = () => {
        fetch('/api/v1/map')
            .then(response => response.json())
            .then(data => setMapData(data))
            .catch(error => console.error('Error fetching map data:', error));
    };

    return (
        <div className="home-page-container">
            <div className="hero-div">
                <h1>Petclinic</h1>
                <h3>---</h3>
                <h3>Welcome to the PSG2-2324-G3-33 Petclinic</h3>
                <button onClick={fetchWeatherData} className="btn-blue">Get Weather</button>
                <button onClick={fetchMapData}className="btn-green">Get Map</button>
                {weatherData && (
                    <div className="weather-info">
                        <h3>Weather in {weatherData.city}:</h3>
                        <p>Temperature: {weatherData.temperature}°C</p>
                        <p>Climate: {weatherData.climate}</p>
                        <p>Humidity: {weatherData.humidity}%</p>
                        <p>Wind Speed: {weatherData.windSpeed} km/h</p>
                    </div>
                )}
                {mapData && (
                    <div className="map-info">
                        <h3>Location of clinics:</h3>
                        <p>Street: {mapData.street}</p>
                        <p>City: {mapData.city}</p>
                        <p>Postal Code: {mapData.postalCode}</p>
                        <p>Region: {mapData.region}</p>
                        <p>Country: {mapData.country}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
