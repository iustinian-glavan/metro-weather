import React from "react";
import { styled, setup } from "goober";

setup(React.createElement);
const HeaderDetails = styled("div")`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .city {
    font-size: 20px;
    text-transform: uppercase;
  }
  .weather-detail {
    font-size: 14px;
  }
`;

interface Props {
  cityName: string;
  weatherDetail: string;
}
const WidgetHeader = ({ cityName, weatherDetail }: Props) => {
  return (
    <HeaderDetails>
      <div className="city">{cityName}</div>
      <div className="weather-detail">{weatherDetail}</div>
    </HeaderDetails>
  );
};

export default WidgetHeader;
