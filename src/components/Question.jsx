import { useContext, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { LogContext } from "./LogContextProvider";
import { shuffledQuestions } from "../questions";
import { nullishAdd } from "../functions";

export default function Question() {
  const { logs, addLog, isAnswered } = useContext(LogContext);
  const currentQuestion = shuffledQuestions[logs.length];
  const TIMER = 20000;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      nullishAdd(addLog, currentQuestion, isAnswered);
    }, TIMER);

    return () => {
      clearTimeout(timeOut);
    };
  }, [logs]);

  return (
    <div id="question">
      <ProgressBar
        TIMER={TIMER}
        changedQuestion={currentQuestion}
        isAnswered={isAnswered}
      />
      <h2>{currentQuestion.text}</h2>
    </div>
  );
}
