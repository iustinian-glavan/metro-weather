import React from "react";
import { styled, setup } from "goober";
import Icon from "./icon";

setup(React.createElement);
const Weather = styled("div")`
margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFFFFF50;
  border-radius: 5px;
  margin: 10px 5px 0 5px;
  .current-temperature {
    font-size: 48px;
    flex: 1;
    text-align: center;
  }
  .flex {
    text-align: center;
    flex: 1;
  }
  .temperatures {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    justify-content: center;
    .min-temp,
    .max-temp {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .label {
        width: 27px;
        color: gray;
        font-size: 16px;
      }
      .value {
        font-size: 24px;
      }
    }
  }
`;

interface Props {
  currentTemp: string;
  minTemp: string;
  maxTemp: string;
  icon: string;
}
const CurrentWeather = ({ currentTemp, minTemp, maxTemp, icon }: Props) => {
  return (
    <Weather>
      <div className="current-temperature">{currentTemp}</div>
      <div className="flex">
        <Icon code={icon} large />
      </div>
      <div className="temperatures">
        <div className="min-temp">
          <span className="label">MIN</span>
          <span className="value">{minTemp}</span>
        </div>
        <div className="max-temp">
          <span className="label">MAX</span>
          <span className="value">{maxTemp}</span>
        </div>
      </div>
    </Weather>
  );
};

export default CurrentWeather;
