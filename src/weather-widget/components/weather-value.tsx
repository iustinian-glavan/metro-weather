import React from "react";
import { setup, styled } from "goober";

interface Props {
  label: string;
  value: string;
}

setup(React.createElement);

const Stat = styled("div")`
  width: calc(50% - 10px);
  background-color: #FFFFFF50;
  border-radius: 5px;
  padding: 10px;
  margin: 0 5px;
  font-size: 14px;
`;
const Label = styled("span")`
  text-transform: uppercase;
  color: grey;
  margin-right: 5px;
`;

const WeatherValue = ({ label, value }: Props) => {
  return (
    <Stat>
      <Label>{label}</Label>
      <span>{value}</span>
    </Stat>
  );
};

export default WeatherValue;
