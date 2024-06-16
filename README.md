## SkyCast

SkyCast is a weather forecast application that allows users to search for weather information for different cities. The app provides current weather details and a forecast for the upcoming days. The application features a dark mode toggle and is built with React, Tailwind CSS, and the OpenWeatherMap API.

### Features

- Search for weather information by city name
- Display current weather details including temperature, humidity, and more
- Provide weather forecast for the upcoming days
- Dark mode toggle for better visual experience
- Responsive design for different screen sizes

### Technologies Used

- **React**: A JavaScript library for building user interfaces
- **Tailwind CSS**: A utility-first CSS framework for styling
- **OpenWeatherMap API**: A service providing weather data

### Installation

To run the application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/NGangaMahesh/skycast.git
    ```

2. Navigate to the project directory:
    ```bash
    cd skycast
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory of the project and add your OpenWeatherMap API key:
    ```env
    REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open your browser and visit `http://localhost:3000` to see the application in action.

### Known Issues or Limitations

- The application currently supports only a limited set of weather data provided by the OpenWeatherMap API.


### Brief Description of the Approach

The application is structured as follows:

1. **App Component**: This is the main component that manages the state for dark mode and weather data. It also handles fetching weather data from the OpenWeatherMap API.

2. **CurrentTemperature Component**: This component displays the current weather details for the selected city. It uses custom icons for weather conditions and provides a detailed view of the current weather.

3. **WeatherForecast Component**: This component displays the weather forecast for the upcoming days. It uses a grid layout to show multiple forecasts and provides detailed weather information for each day.

4. **Dark Mode Toggle**: A simple toggle switch to switch between light and dark modes. This improves the visual experience, especially in low-light environments.

   To add deployment information to your README file, you can provide details about where your project is deployed and how others can access it. Here’s a basic template to include deployment information:

### Deployment

The project is deployed and can be accessed [here](https://skycast-git-main-ganga-maheshs-projects.vercel.app/).

### How to Access

To access the deployed project:

1. Simply click on the following link: [SkyCast Deployment](https://skycast-git-main-ganga-maheshs-projects.vercel.app/).
2. Ensure you have a stable internet connection.
3. Enjoy using the application!

### Additional Information

- **Deployment Platform**: Vercel
- **Deployment Status**: Live
