import React from "react";
import { useCountRenders } from "./useCountRenders";
export const Hello = React.memo(({ increment }) => {
  useCountRenders();
  return <button onClick={increment}>hello</button>;
});
