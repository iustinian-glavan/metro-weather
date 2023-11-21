class WeatherIcon extends HTMLElement {
  //   static observedAttributes = ["code", "large"];

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<img src=${`https://openweathermap.org/img/wn/${this.getAttribute(
      "data-code"
    )}.png`} />`;
  }
}

customElements.define("weather-icon", WeatherIcon);
