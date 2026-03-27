import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const TimeContext = createContext();

function TimeProvider({ children }) {
  const formatTime = useCallback(function formatTime(date) {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  }, []);
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(
    function () {
      const id = setInterval(function () {
        setTime(formatTime(new Date()));
      }, 1000);

      return () => clearInterval(id);
    },
    [formatTime],
  );
  return (
    <TimeContext.Provider value={{ time }}>{children}</TimeContext.Provider>
  );
}
function useTime() {
  const context = useContext(TimeContext);
  if (context == undefined)
    throw new Error("TimeContext is being used outside TimeProvider");
  return context;
}

export { TimeProvider, useTime };
