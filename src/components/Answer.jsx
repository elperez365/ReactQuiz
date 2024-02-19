export default function Answer({ answer = "default answer", onAnswer }) {
  return (
    <div className="answer">
      <button onClick={() => onAnswer()}>{answer}</button>
    </div>
  );
}
