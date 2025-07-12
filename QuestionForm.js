import React, { useState, useEffect } from "react";

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function QuestionForm({ questionData, onSubmit }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [error, setError] = useState("");
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    const allAnswers = [...questionData.incorrect_answers, questionData.correct_answer];
    setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
  }, [questionData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) {
      setError("Please select an answer.");
      return;
    }
    setError("");
    onSubmit(selectedAnswer);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3 dangerouslySetInnerHTML={{ __html: questionData.question }}></h3>

      {shuffledAnswers.map((answer, index) => (
        <label key={index}>
          <input
            type="radio"
            name="answer"
            value={answer}
            checked={selectedAnswer === answer}
            onChange={() => setSelectedAnswer(answer)}
          />
          {decodeHtml(answer)}
        </label>
      ))}

      {error && <p className="error">{error}</p>}
      <button type="submit">Submit Answer</button>
    </form>
  );
}

export default QuestionForm;
