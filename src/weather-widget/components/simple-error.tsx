const SimpleError = ({ message }: Pick<Error, "message">) => {
  return <div>{message}</div>;
};
export default SimpleError;
