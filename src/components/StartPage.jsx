export default function StartPage({ onStart }) {
  return (
    <div id="quiz" className="startPage">
      <h1>Welcome to the Quiz</h1>
      <p>You will be presented with 7 True or False questions.</p>
      <p>Can you score 100% ?</p>
      <button id="startButton" onClick={() => onStart()}>
        Start
      </button>
    </div>
  );
}
