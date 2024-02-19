import { useContext } from "react";
import { LogContext } from "./LogContextProvider";

export default function Stats() {
  const { logs } = useContext(LogContext);
  const totalQuestions = logs.length;
  const answeredCorrectly = logs.filter(
    (log) => log.isCorrect === "correct"
  ).length;
  const answeredIncorrectly = logs.filter(
    (log) => log.isCorrect === "wrong"
  ).length;
  const skipped = logs.filter((log) => log.isCorrect === "skipped").length;
  return (
    <div id="summary-stats">
      <p>
        <span className="number">
          {((skipped / totalQuestions) * 100).toFixed(0)}%
        </span>
        <span className="text">skipped</span>
      </p>
      <p>
        <span className="number">
          {((answeredCorrectly / totalQuestions) * 100).toFixed(0)}%
        </span>
        <span className="text">ANSWERED CORRECTLY</span>
      </p>
      <p>
        <span className="number">
          {((answeredIncorrectly / totalQuestions) * 100).toFixed(0)}%
        </span>
        <span className="text">ANSWERED INCORRECTLY</span>
      </p>
    </div>
  );
}
