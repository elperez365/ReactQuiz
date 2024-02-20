import { shuffledQuestions } from "./questions";

export const nullishAdd = (addLog, currentQuestion, isAnswered) => {
  if (isAnswered) return;
  const nullishLog = {
    id: currentQuestion.id,
    question: currentQuestion.text,
    answer: null,
    isCorrect: "skipped",
  };
  addLog(nullishLog);
  if (currentQuestion.skipped) return;
  const skippedQuestion = {
    ...currentQuestion,
    skipped: true,
  };
  shuffledQuestions.push(skippedQuestion);
};
