import { shuffledQuestions } from "./questions";

export const nullishAdd = (addLog, currentQuestion, isAnswered) => {
  if (isAnswered) return;
  const nullishLog = {
    id: currentQuestion.id,
    question: currentQuestion.text,
    answer: null,
    isCorrect: "skipped",
  };
  const skippedQuestion = {
    ...currentQuestion,
    skipped: true,
  };
  shuffledQuestions.push(skippedQuestion);
  addLog(nullishLog);
};
