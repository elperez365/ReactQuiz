import { useContext, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { LogContext } from "./LogContextProvider";
import { shuffledQuestions } from "../questions";

export default function Question() {
  const { logs, addLog } = useContext(LogContext);
  const currentQuestion = shuffledQuestions[logs.length];
  const TIMER = 10000;

  const nullishAdd = () => {
    const nullishLog = {
      id: currentQuestion.id,
      question: currentQuestion.text,
      answer: null,
      isCorrect: "Skipped",
    };
    addLog(nullishLog);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      nullishAdd();
    }, TIMER);

    return () => {
      clearTimeout(timeOut);
    };
  }, [logs]);

  return (
    <div id="question">
      <ProgressBar TIMER={TIMER} changedQuestion={currentQuestion} />
      <h2>{currentQuestion.text}</h2>
    </div>
  );
}
