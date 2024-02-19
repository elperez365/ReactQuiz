import Answer from "./Answer";
import { useContext } from "react";
import { LogContext } from "./LogContextProvider";
import { shuffledQuestions as questionsData } from "../questions";
import answers from "../answers";

export default function Answers() {
  const { logs, addLog } = useContext(LogContext);
  const currentQuestion = questionsData[logs.length];
  const answers = currentQuestion.answers;
  const correctAnswer = questionsData;

  const onAnswer = (answer) => {
    const log = {
      id: currentQuestion.id,
      question: currentQuestion.text,
      answer,
    };
    addLog(log);
  };
  return (
    <div id="answers">
      {answers.map((answer, index) => (
        <Answer
          key={index + answer}
          answer={answer}
          onAnswer={() => onAnswer(answer)}
        />
      ))}
    </div>
  );
}
