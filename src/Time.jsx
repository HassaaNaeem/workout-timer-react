import React from "react";
import { useTime } from "./TimeContext";

function Time() {
  const { time } = useTime();

  // Will be be AM or PM

  return (
    <>
      <h1>Workout timer</h1>
      <time>For your workout on {time}</time>
    </>
  );
}

export default Time;
