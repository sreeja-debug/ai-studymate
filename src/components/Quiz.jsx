
import { useState } from "react";

function Quiz({ quiz }) {
  const [currentQuiz, setCurrentQuiz] = useState(quiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [wrongQuestions, setWrongQuestions] = useState([]);

  const question = currentQuiz[currentQuestion];

  function handleAnswer(index) {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(index);

    if (index === question.answer) {
      setScore((prev) => prev + 1);
    } else {
      setWrongQuestions((prev) => [...prev, question]);
    }
  }

  function handleNext() {
    if (currentQuestion === currentQuiz.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
  }

  function handleRestart() {
    setCurrentQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
    setWrongQuestions([]);
  }

  function handleRetryWrong() {
    setCurrentQuiz(wrongQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
    setWrongQuestions([]);
  }

  if (finished) {
    return (
      <div className="quiz">
        <h3>Quiz Complete!</h3>

        <p>
          Your score: {score} / {currentQuiz.length}
        </p>

        {wrongQuestions.length > 0 && currentQuiz === quiz && (
          <button onClick={handleRetryWrong}>
            Retry Wrong Answers
          </button>
        )}

        <button onClick={handleRestart}>
          Restart Full Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <p>
        Question {currentQuestion + 1} of {currentQuiz.length}
      </p>

      <h3>{question.question}</h3>

      <div className="options">
        {question.options.map((option, index) => (
          <button
  key={index}
  onClick={() => handleAnswer(index)}
  disabled={selectedAnswer !== null}
  className={
    selectedAnswer !== null
      ? index === question.answer
        ? "correct-answer"
        : index === selectedAnswer
        ? "wrong-answer"
        : ""
      : ""
  }
>
  {option}
</button>
        ))}
      </div>

      {selectedAnswer !== null && (
        <p>
          {selectedAnswer === question.answer
            ? "Correct! 🎉"
            : `Wrong. Correct answer: ${question.options[question.answer]}`}
        </p>
      )}

      {selectedAnswer !== null && (
        <button onClick={handleNext}>
          {currentQuestion === currentQuiz.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      )}
    </div>
  );
}

export default Quiz;

