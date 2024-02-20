import { useContext } from "react";
import { LogContext } from "./LogContextProvider";
import { shuffledQuestions } from "../questions";

export default function SkipButton({ onClick }) {
  const { logs, addLog, isAnswered } = useContext(LogContext);
  const currentQuestion = shuffledQuestions[logs.length];

  const nullishAdd = () => {
    if (isAnswered) return;
    const nullishLog = {
      id: currentQuestion.id,
      question: currentQuestion.text,
      answer: null,
      isCorrect: "skipped",
    };
    addLog(nullishLog);
  };

  return (
    <button id="skipButton" onClick={() => nullishAdd()}>
      Skip
    </button>
  );
}
