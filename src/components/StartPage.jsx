import { questionsData } from "../questions";

export default function StartPage({ onStart }) {
  const nQuestions = questionsData.length;

  return (
    <div id="quiz" className="startPage">
      <h1>Welcome to the Quiz</h1>
      <p>You will be presented with {nQuestions} questions.</p>
      <p>Each question will have 20 seconds to answer.</p>
      <p>
        If you skip one or more questions you will be given a second chance at
        the end for each skipped question
      </p>
      <p>
        if you skip the question for the second time it is considered skipped
      </p>
      <p>Can you score 100% ?</p>
      <button id="startButton" onClick={() => onStart()}>
        Start
      </button>
    </div>
  );
}
