import { CurrentWeatherDataModel, ForecastDataModel, Wind } from "./fetch";

export type Units = "standard" | "metric" | "imperial";
export interface WeatherStatValue {
  label: string;
  value: string;
}
export interface CurrentWeatherEntity {
  city: string;
  description: string;
  icon: string;
  currentTemp: string;
  minTemp: string;
  maxTemp: string;
  weatherStats: Array<WeatherStatValue>;
}
export interface ForecastEntity {
  day: string,
  hour: string,
  icon: string,
  minTemp: string,
  maxTemp: string,
}

export interface WeatherDataEntity {
  currentWeather: CurrentWeatherEntity;
  forecasts: ForecastEntity[];
}

const getTimeFromUnix = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return `${date.getHours()}:${date.getMinutes()}`;
};

export const currentWeatherDataToCurrentWeatherEntity = (
  data: CurrentWeatherDataModel,
  units: Units = "standard"
): CurrentWeatherEntity => {
  return {
    city: data.name,
    description: data.weather[0].description ?? data.weather[0].main,
    icon: data.weather[0].icon,
    currentTemp: `${Math.round(data.main.temp)}${TEMPERATURE_UNITS[units]}`,
    minTemp: `${Math.floor(data.main.temp_min)}${TEMPERATURE_UNITS[units]}`,
    maxTemp: `${Math.ceil(data.main.temp_max)}${TEMPERATURE_UNITS[units]}`,
    weatherStats: [
      { label: "Wind", value: getHumanReadableWindValue(data.wind, units) },
      { label: "Humidity", value: data.main.humidity.toString() },
      { label: "Sunrise", value: getTimeFromUnix(data.sys.sunrise) },
      { label: "Sunset", value: getTimeFromUnix(data.sys.sunset) },
    ],
  };
};

const getHumanReadableWindValue = (wind: Wind, units: Units): string => {
  return `${wind.speed} ${SPEED_UNITS[units]} ${wind.deg}°`;
};

const getShortDayFromDate = (dateString: string): string => {
  return new Date(dateString).toLocaleString(undefined, { weekday: "short" });
};

export const forecastDataToForecastEntity = (forecast: ForecastDataModel): ForecastEntity => {
  const [dateString, hour] = forecast.dt_txt.split(" ");
  return {
    day: getShortDayFromDate(dateString),
    hour: hour.slice(0, 5),
    icon: forecast.weather[0].icon,
    minTemp: `${Math.floor(forecast.main.temp_min)}°`,
    maxTemp: `${Math.ceil(forecast.main.temp_max)}°`,
  };
};

export const TEMPERATURE_UNITS: Record<Units, string> = {
  metric: "°C",
  imperial: "°F",
  standard: "K",
};

export const SPEED_UNITS: Record<Units, string> = {
  metric: "m/s",
  imperial: "mph",
  standard: "m/s",
};
