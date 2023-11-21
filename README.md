# Weather Widget

A simple weather widget built using TypeScript and React that fetches weather data from the OpenWeatherMap API.
It also includes a simple web component as an example.

*Ensure that you have obtained an API key from OpenWeatherMap before using this widget. You can sign up and get your API key from OpenWeatherMap.*

## Usage

### Installation

To use this weather widget in your project, follow these steps:

1. Install the package:
   ```bash
   npm install weather-widget
   ```
2. Import the WeatherWidget component in your project:

````bash
import { WeatherWidget } from 'weather-widget';

### Props
The WeatherWidget component accepts the following props:

apiKey (string): OpenWeatherMap API key.
cityName (string): Name of the city (widget will use the first result in the list).
stateCode (string, optional): State code (for US).
countryCode (string, optional): Country code (ISO3166).
units (standard | metric | imperial, optional): Units of measurement (default: standard).
lang (string, optional): Language (default: en).

 ```bash
 import React from 'react';
import { WeatherWidget } from 'weather-widget';

const App = () => {
return (
  <div>
    <h1>Weather in Your City</h1>
    <WeatherWidget
      apiKey="your-api-key"
      cityName="Your City"
      units="metric"
      lang="en"
    />
  </div>
);
};

export default App;
````


