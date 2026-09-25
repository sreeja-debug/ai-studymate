import { useState } from "react";

function Flashcard({ card }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flashcard">
      <h3>{card.question}</h3>

      {showAnswer && (
        <p className="answer">
          {card.answer}
        </p>
      )}

      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
    </div>
  );
}

export default Flashcard;