// main entry
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "weather-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export * from "./weather-widget";
