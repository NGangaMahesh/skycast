import React from "react";
import icons from "../../assets/assets.js";
import "./CurrentTemperature.css"; // Import CSS file for animations

const CurrentTemperature = ({ weatherData }) => {
  const currentForecast = weatherData.list[0];
  const { main, weather, clouds, wind, visibility, pop, dt_txt } = currentForecast;
  const { temp, feels_like, temp_min, temp_max, pressure, sea_level, grnd_level, humidity } = main;
  const { main: weatherMain, description: weatherDescription, icon: weatherIcon } = weather[0];
  const { all: cloudCoverage } = clouds;
  const { speed: windSpeed, deg: windDirection, gust } = wind;
  const Icon = icons[weatherIcon];

  return (
    <div className="bg-gradient-to-r from-sky-500 to-blue-700 p-6 rounded-lg shadow-lg text-white max-w-md mx-auto animate-fade-in">
      <div className="flex items-center mb-6">
        <div className="w-1/3">
          <img src={Icon} className="h-40 w-40" alt="Weather icon" />
        </div>
        <div className="w-2/3 text-right">
          <h1 className="text-5xl font-bold">{temp}°C</h1>
          <p className="text-xl">Feels Like: {feels_like}°C</p>
          <p className="text-md capitalize">{weatherDescription}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Weather Details</h2>
          <ul className="text-md space-y-1">
            <li><span className="font-bold">Min Temp:</span> {temp_min}°C</li>
            <li><span className="font-bold">Max Temp:</span> {temp_max}°C</li>
            <li><span className="font-bold">Pressure:</span> {pressure} hPa</li>
            <li><span className="font-bold">Sea Level:</span> {sea_level} hPa</li>
            <li><span className="font-bold">Ground Level:</span> {grnd_level} hPa</li>
            <li><span className="font-bold">Humidity:</span> {humidity}%</li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">Additional Info</h2>
          <ul className="text-md space-y-1">
            <li><span className="font-bold">Cloud Coverage:</span> {cloudCoverage}%</li>
            <li><span className="font-bold">Wind Speed:</span> {windSpeed} m/s</li>
            <li><span className="font-bold">Wind Direction:</span> {windDirection}°</li>
            <li><span className="font-bold">Wind Gust:</span> {gust} m/s</li>
            <li><span className="font-bold">Visibility:</span> {visibility} meters</li>
            <li><span className="font-bold">Precipitation Probability:</span> {pop * 100}%</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-200">
        <p>Last updated: {new Date().toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CurrentTemperature;
