// This hook is directly pasted from Dan Abramov's recipe
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// Dated February 4, 2019.
// ("Feel free to copy paste it in your project or put it on npm.")

import { useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
