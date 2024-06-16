import React, { useState, useEffect } from "react";
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import CurrentTemperature from "./components/CurrentTemperature/CurrentTemperature.js";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast.js";
import "./App.css";
import fixingImage from "./assets/fixing.png";
import axios from "axios";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      try {
        setWeatherData(null); // Clear previous weather data
        setError(null); // Clear any previous error

        const trimmedQuery = query.trim();
        
        let url;
        // Determine if the query is a city name or postal code
        if (isNaN(trimmedQuery)) {
          url = `https://api.openweathermap.org/data/2.5/forecast?q=${trimmedQuery}&appid=${apiKey}&units=metric&cnt=10`;
          // City name
        } else {
          // Postal code
          url = `https://api.openweathermap.org/data/2.5/forecast?zip=${trimmedQuery},in&appid=${apiKey}&units=metric&cnt=9`;
          console.log('12')
        }

        const response = await axios.get(url);
        console.log(response)
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
        setError("Error fetching weather data. Please try again.");
        setWeatherData(null);
      }
    }
  };

  useEffect(() => {
    // Update HTML root class for dark mode
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-900 transition-colors duration-300 ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <header className="w-full p-4 bg-gray-200 dark:bg-gray-800 sticky top-0 z-10 shadow-md transition-colors duration-300">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="/"
            className="text-blue-400 dark:text-blue-300 text-2xl font-bold flex items-center"
          >
            Sky<span className="text-gray-800 dark:text-gray-200">Cast</span>
          </a>
          <DarkModeToggle
            onChange={setIsDarkMode}
            isDarkMode={isDarkMode}
            className="transition-colors duration-300"
          />
        </nav>
      </header>
      <main className="p-5 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSubmit} className="mt-4 max-w-lg mx-auto">
            <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter city name or postal code..."
                className="w-full py-3 px-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 dark:bg-blue-400 text-white py-3 px-6 transition-colors duration-300 hover:bg-blue-600 dark:hover:bg-blue-500"
              >
                <svg
                  className="w-6 h-6 mr-2 transition-transform duration-300 transform hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.78-4.78m-.63-.63a8 8 0 1 1-4.95-14.22"
                  ></path>
                </svg>
              </button>
            </div>
          </form>

          {error && (
            <div className="text-center mt-8">
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-md mx-auto">
                <img src={fixingImage} alt="Error" className="mx-auto mb-4 w-20 h-20" />
                <p className="text-red-500 dark:text-red-400 text-lg font-semibold">{error}</p>
              </div>
            </div>
          )}
          {weatherData ? (
            <>
              <section className="mt-8">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 animate-fade-in-up">
                  <CurrentTemperature weatherData={weatherData} />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    This section displays the current weather details including
                    temperature, humidity, and more.
                  </p>
                </div>
              </section>
              <section className="mt-8">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 animate-fade-in-up">
                  <WeatherForecast weatherData={weatherData.list} />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    This section provides a 5-day weather forecast with
                    temperature and weather conditions.
                  </p>
                </div>
              </section>
            </>
          ) : (
            !error && (
              <div className="text-center mt-8">
                <p className="text-gray-500 dark:text-gray-400">
                  Please enter a city name or postal code to get the weather forecast.
                </p>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
