import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter <= 10) {
      setTimeout(() => {
        return setCounter((prevState) => prevState + 1);
      }, 1000);
    }
  }, [counter]);

  return <div>{counter}</div>;
}

export default Counter;
