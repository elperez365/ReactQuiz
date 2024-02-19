import Quiz from "./Quiz";
import Summary from "./Summary";
import { useContext } from "react";
import { LogContext } from "./LogContextProvider";
import { shuffledQuestions } from "../questions";

export default function Outlet() {
  const { logs } = useContext(LogContext);

  const currentQuestion = logs.length;
  const totalQuestions = shuffledQuestions.length;
  const isQuizEnd = currentQuestion === totalQuestions;

  return <>{isQuizEnd ? <Summary /> : <Quiz />}</>;
}
