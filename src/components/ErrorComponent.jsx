import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = () => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={"4"}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={"container.lg"}
    >
      <AlertIcon />
      <p>Something Wrong</p>
    </Alert>
  );
};

export default ErrorComponent;
