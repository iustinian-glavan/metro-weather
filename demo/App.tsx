import React from "react";
import ReactDOM from "react-dom/client";
import { WeatherWidget } from "../src";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WeatherWidget
      apiKey={"your-api-key"}
      cityName={"cluj-napoca"}
      units="imperial"
    />
  </React.StrictMode>
);
