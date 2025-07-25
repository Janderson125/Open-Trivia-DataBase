import React from "react";

function Results({ userName, isCorrect, correctAnswer, onRestart }) {
  return (
    <div className="results">
      <h2>{isCorrect ? `🎉 Nice job, ${userName}!` : `🙁 Oops, ${userName}...`}</h2>
      {!isCorrect && (
        <p>
          The correct answer was: <strong>{correctAnswer}</strong>
        </p>
      )}
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}

export default Results;
