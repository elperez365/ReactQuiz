import { useContext } from "react";
import summaryImg from "../assets/quiz-complete.png";
import { LogContext } from "./LogContextProvider";
import Stats from "./Stats";
export default function Summary() {
  const { logs } = useContext(LogContext);
  return (
    <div id="summary">
      <img src={summaryImg} alt="game-over" />
      <h2>Quiz completed!</h2>
      <Stats />

      <ol>
        {logs.map((log, index) => (
          <li key={index}>
            <h3>{index + 1}</h3>
            <span className="question">{log.question}</span>
            <br />
            <span className={"user-answer " + log.isCorrect}>
              {" "}
              {log.answer || "Skipped"}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
