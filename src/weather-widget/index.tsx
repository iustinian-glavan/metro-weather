import React, { useEffect, useState } from "react";
import { styled, setup } from "goober";
import { fetchData } from "./fetch";
import SimpleError from "./components/simple-error";
import Loader from "./components/loader";
import WidgetHeader from "./components/widget-header";
import CurrentWeather from "./components/current-weather";
import WeatherValue from "./components/weather-value";
import WeatherForecast from "./components/weather-forecast";
import {
  ForecastEntity,
  Units,
  WeatherDataEntity,
  WeatherStatValue,
} from "./data-transformer";

setup(React.createElement);

const Container = styled("div")`
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #a9d7e6;
  border-radius: 5px;
  * {
    font-family: "Oswald", sans-serif;
    line-height: 1;
    box-sizing: border-box;
  }
`;

const WeatherStats = styled("div")`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  div:nth-child(n + 3) {
    margin-top: 10px;
  }
`;
const Forecasts = styled("div")`
  margin: 10px 5px 0 5px;
  .forecasts {
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    padding-bottom: 10px;
  }
`;

export interface WeatherWidgetProps {
  /**
   * openweathermap api key
   */
  apiKey: string;
  /**
   * name of the city (widget will use first result in the list)
   */
  cityName: string;
  /**
   * state code (for US)
   */
  stateCode?: string;
  /**
   * country code (ISO3166)
   */
  countryCode?: string;
  /**
   * units of measurement
   */
  units?: Units;
  /**
   * language
   */
  lang?: string;
}

const WeatherWidget = (props: WeatherWidgetProps): React.ReactElement => {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState<WeatherDataEntity | undefined>(
    undefined
  );
  useEffect(() => {
    fetchData(props)
      .then((weatherData) => {
        setError(undefined);
        setWeatherData(weatherData);
      })
      .catch((err) => {
        setWeatherData(undefined);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [props]);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <SimpleError message={error.message} />}
      {weatherData && (
        <>
          <WidgetHeader
            cityName={weatherData.currentWeather.city}
            weatherDetail={weatherData.currentWeather.description}
          />
          <CurrentWeather
            currentTemp={weatherData.currentWeather.currentTemp}
            minTemp={weatherData.currentWeather.minTemp}
            maxTemp={weatherData.currentWeather.maxTemp}
            icon={weatherData.currentWeather.icon}
          />
          <WeatherStats>
            {weatherData.currentWeather.weatherStats.map(
              (stat: WeatherStatValue) => (
                <WeatherValue {...stat} key={stat.label} />
              )
            )}
          </WeatherStats>
          <Forecasts>
            <div className="forecasts">
              {weatherData.forecasts.map((forecast: ForecastEntity) => (
                <WeatherForecast
                  {...forecast}
                  key={forecast.day + forecast.hour}
                />
              ))}
            </div>
          </Forecasts>
        </>
      )}
    </Container>
  );
};

export { WeatherWidget };
