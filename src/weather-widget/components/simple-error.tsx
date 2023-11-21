import React from "react";

const SimpleError = ({
  message,
}: Pick<Error, "message">): React.ReactElement => {
  return <div>{message}</div>;
};
export default SimpleError;
