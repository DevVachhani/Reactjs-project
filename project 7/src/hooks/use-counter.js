import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prev) => prev + 1);
      } else {
        setCounter((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return counter;
};

export default useCounter;
