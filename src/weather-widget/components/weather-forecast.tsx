import React from "react";
import { setup, styled } from "goober";
import "../web-components/weather-icon";

interface Props {
  day: string;
  hour: string;
  icon: string;
  minTemp: string;
  maxTemp: string;
}

setup(React.createElement);

const Forecast = styled("span")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff50;
  border-radius: 5px;
  padding: 10px 2px;
  &:nth-child(n + 2) {
    margin-left: 10px;
  }
  .forecast {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }
  .day {
    font-size: 14px;
    font-weight: 700;
  }
  .temp-range {
    font-size: 12px;
    font-weight: 700;
    text-align: center;
  }
`;

const WeatherForecast = ({
  day,
  hour,
  icon,
  minTemp,
  maxTemp,
}: Props): React.ReactElement => {
  return (
    <Forecast>
      <div className="forecast">
        <div className="day">{day}</div>
        <div>{hour}</div>
      </div>
      <div>
        <weather-icon data-code={icon}></weather-icon>
      </div>
      <div className="temp-range">
        {minTemp}~{maxTemp}
      </div>
    </Forecast>
  );
};

export default WeatherForecast;
