import React from 'react';
import {icons} from "../../assets/assets.js";

const WeatherForecast = ({ weatherData }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {weatherData.map((forecast) => (
        <div key={forecast.dt} className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 transform transition-transform hover:scale-105">
          <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-300">{formatDateTime(forecast.dt_txt)}</h2>
            {icons[forecast.weather[0].icon] && (
              <img
                className="w-28 h-28"
                src={icons[forecast.weather[0].icon]}
                alt={forecast.weather[0].description}
              />
            )}
          </div>
          <div className="text-gray-700 dark:text-gray-300 mb-2">{forecast.weather[0].description}</div>
          <div className="grid grid-cols-2 gap-x-2 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <p className="mb-1">Temperature:</p>
              <p className="mb-1">Feels like:</p>
              <p className="mb-1">Humidity:</p>
              <p className="mb-1">Wind Speed:</p>
            </div>
            <div>
              <p className="mb-1">{forecast.main.temp} °C</p>
              <p className="mb-1">{forecast.main.feels_like} °C</p>
              <p className="mb-1">{forecast.main.humidity}%</p>
              <p className="mb-1">{forecast.wind.speed} m/s</p>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-x-2 text-xs text-gray-500 dark:text-gray-400">
            <div>
              <p className="mb-1">Pressure:</p>
              <p className="mb-1">Cloudiness:</p>
              <p className="mb-1">Visibility:</p>
            </div>
            <div>
              <p className="mb-1">{forecast.main.pressure} hPa</p>
              <p className="mb-1">{forecast.clouds.all}%</p>
              <p className="mb-1">{(forecast.visibility / 1000).toFixed(1)} km</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Function to format date and time 
const formatDateTime = (dt_txt) => {
  const date = new Date(dt_txt);
  return `${date.toLocaleDateString(undefined, { weekday: 'short' })}, ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
};

export default WeatherForecast;
