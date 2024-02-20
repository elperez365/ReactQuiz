import { shuffledQuestions } from "../questions";

export default function StartPage({ onStart }) {
  const nQuestions = shuffledQuestions.length;

  return (
    <div id="quiz" className="startPage">
      <h1>Welcome to the Quiz</h1>
      <p>You will be presented with {nQuestions} questions.</p>
      <p>Can you score 100% ?</p>
      <button id="startButton" onClick={() => onStart()}>
        Start
      </button>
    </div>
  );
}
