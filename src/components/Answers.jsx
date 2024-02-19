import Answer from "./Answer";
import { useContext } from "react";
import { LogContext } from "./LogContextProvider";
import { shuffledQuestions as questionsData } from "../questions";

export default function Answers() {
  const { logs, addLog, setIsAnswered, isAnswered } = useContext(LogContext);
  const currentQuestion = questionsData[logs.length];
  const answers = currentQuestion.answers;

  const onAnswer = (answer) => {
    if (isAnswered) return;
    setIsAnswered(answer);

    const log = {
      id: currentQuestion.id,
      question: currentQuestion.text,
      isCorrect: currentQuestion.correctAnswer === answer ? "correct" : "wrong",
      answer,
    };
    setTimeout(() => {
      addLog(log);
      setIsAnswered(false);
    }, 3000);
  };
  return (
    <div id="answers">
      {answers.map((answer, index) => (
        <Answer
          key={index + answer}
          answer={answer}
          correctAnswer={currentQuestion.correctAnswer}
          onAnswer={() => onAnswer(answer)}
          isAnswered={isAnswered}
        />
      ))}
    </div>
  );
}
