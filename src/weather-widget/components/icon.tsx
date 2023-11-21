interface Props {
  code: string;
  large?: boolean;
}

const Icon = ({ code, large = false }: Props) => {
  let imageUrl = "https://openweathermap.org/img/wn/" + code;
  if (large) {
    imageUrl += "@2x";
  }
  imageUrl += ".png";
  return <img src={imageUrl} />;
};

export default Icon;
