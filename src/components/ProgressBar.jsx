import { useEffect, useState } from "react";

export default function ProgressBar({ TIMER, changedQuestion }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    setRemainingTime(TIMER);
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [changedQuestion]);

  useEffect(() => {
    if (remainingTime === 0) {
      setRemainingTime(TIMER);
    }
  }, [remainingTime, TIMER]);

  return <progress id="progress" value={remainingTime} max={TIMER} />;
}
