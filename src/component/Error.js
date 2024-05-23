import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const errorObj = useRouteError();
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>Something went wrong</h2>
      <h4>
        {errorObj.status}:{errorObj.statusText}
      </h4>
    </div>
  );
}
