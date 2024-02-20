import { useContext } from "react";
import { LogContext } from "./LogContextProvider";
import { shuffledQuestions } from "../questions";
import { nullishAdd } from "../functions";

export default function SkipButton() {
  const { logs, addLog, isAnswered } = useContext(LogContext);
  const currentQuestion = shuffledQuestions[logs.length];

  return (
    <button
      id="skipButton"
      onClick={() => nullishAdd(addLog, currentQuestion, isAnswered)}
    >
      Skip
    </button>
  );
}
