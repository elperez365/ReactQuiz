import { useEffect, useState } from "react";

export default function ProgressBar({ TIMER, changedQuestion, isAnswered }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    if (isAnswered) {
      setRemainingTime(3000);
    } else {
      setRemainingTime(TIMER);
    }

    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [changedQuestion, TIMER, isAnswered]);

  useEffect(() => {
    if (remainingTime === 0) {
      setRemainingTime(TIMER);
    }
  }, [remainingTime, TIMER]);

  return (
    <progress
      id="progress"
      className={isAnswered ? "answered" : undefined}
      value={remainingTime}
      max={isAnswered ? 3000 : TIMER}
    />
  );
}
