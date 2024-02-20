import Question from "./Question";

import Answers from "./Answers";
import SkipButton from "./SkipButton";

export default function Quiz() {
  return (
    <div id="quiz">
      <Question />
      <Answers />
      <SkipButton />
    </div>
  );
}
