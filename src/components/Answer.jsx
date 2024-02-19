import { useEffect, useState } from "react";

export default function Answer({
  answer = "default answer",
  onAnswer,
  isAnswered,
  correctAnswer,
}) {
  const [loader, setLoader] = useState(false);
  const isCorrect = answer === correctAnswer;
  const isAnsweredClass = isAnswered
    ? isCorrect
      ? "correct"
      : "wrong"
    : undefined;
  const isThisButton = isAnswered === answer;
  const awaitClass = isThisButton ? "selected" : undefined;
  const FinalClass = isThisButton ? isAnsweredClass : undefined;

  useEffect(() => {
    if (isAnswered) {
      setLoader(true);
    }
  }, [isAnswered]);

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, [loader]);

  return (
    <div className="answer">
      <button
        className={loader ? awaitClass : FinalClass}
        onClick={() => onAnswer()}
      >
        {answer}
      </button>
    </div>
  );
}
