import { WeatherWidgetProps } from ".";
import {
  currentWeatherDataToCurrentWeatherEntity,
  forecastDataToForecastEntity,
} from "./data-transformer";

interface GeoLocationDataModel {
  lat: number;
  lon: number;
  name: string;
}

interface WeatherDetails {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

interface WeatherDescription {
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface CurrentWeatherDataModel {
  name: string;
  main: WeatherDetails;
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: Array<WeatherDescription>;
  wind: Wind;
}

export interface ForecastDataModel {
  dt_txt: string;
  main: WeatherDetails;
  weather: Array<WeatherDescription>;
}

export const fetchData = ({
  cityName,
  stateCode,
  countryCode,
  apiKey,
  units,
  lang,
}: WeatherWidgetProps) => {
  const q = `${cityName}${stateCode ? "," + stateCode : ""}${
    countryCode ? "," + countryCode : ""
  }`;
  const coordParams = {
    q,
    appid: apiKey,
  };
  const coordinatesQueryString = new URLSearchParams(coordParams).toString();
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?${coordinatesQueryString}`
  ).then((response: Response) => {
    if (!response.ok) {
      return Promise.reject(new Error(response.statusText));
    }
    return response
      .json()
      .then((data: GeoLocationDataModel[]) => {
        const weatherParams = {
          lat: data[0].lat.toString(),
          lon: data[0].lon.toString(),
          appid: apiKey,
          ...(units ? { units } : {}),
          ...(lang ? { lang } : {}),
        };
        const weatherQueryString = new URLSearchParams(
          weatherParams
        ).toString();
        return Promise.all([
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?${weatherQueryString}`
          ),
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?${weatherQueryString}`
          ),
        ])
          .then((responses: Response[]) => {
            return Promise.all(responses.map((res) => res.json()));
          })
          .then(([currentWeatherData, forecastData]) => {
            return Promise.resolve({
              currentWeather: currentWeatherDataToCurrentWeatherEntity(
                currentWeatherData,
                units
              ),
              forecasts: forecastData.list.map(forecastDataToForecastEntity),
            });
          });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  });
};
