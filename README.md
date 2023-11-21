# Weather Widget

A simple weather widget built using TypeScript and React that fetches weather data from the OpenWeatherMap API.
It also includes a simple web component as an example.

_Ensure that you have obtained an API key from OpenWeatherMap before using this widget. You can sign up and get your API key from OpenWeatherMap._

### Props

The WeatherWidget component accepts the following props:

```
apiKey (string): OpenWeatherMap API key.
cityName (string): Name of the city (widget will use the first result in the list).
stateCode (string, optional): State code (for US).
countryCode (string, optional): Country code (ISO3166).
units (standard | metric | imperial, optional): Units of measurement (default: standard).
lang (string, optional): Language (default: en).
```
## Usage

Import the WeatherWidget component in your project

```
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
```
