import React, { useState } from "react";
import HomePage from "./HomePage";
import QuestionForm from "./QuestionForm";
import Results from "./Results";

function App() {
  const [formData, setFormData] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleFormSubmit = async (form) => {
    setFormData(form);
    setShowResults(false);
    setUserAnswer("");

    try {
      const res = await fetch(`https://opentdb.com/api.php?amount=1&category=${form.category}&difficulty=${form.difficulty}&type=multiple`);
      const data = await res.json();
      setQuestionData(data.results[0]);
    } catch (err) {
      setQuestionData({ error: true });
    }
  };

  const handleAnswerSubmit = (answer) => {
    setUserAnswer(answer);
    setIsCorrect(answer === questionData.correct_answer);
    setShowResults(true);
  };

  const handleRestart = () => {
    setFormData(null);
    setQuestionData(null);
    setUserAnswer("");
    setShowResults(false);
  };

  return (
    <div className="app">
      <h1>Open Trivia Quiz</h1>
      {!formData && <HomePage onSubmit={handleFormSubmit} />}
      {formData && questionData && !showResults && !questionData.error && (
        <QuestionForm questionData={questionData} onSubmit={handleAnswerSubmit} />
      )}
      {questionData?.error && <p>Error loading question. Please try again.</p>}
      {showResults && (
        <Results
          userName={formData.name}
          isCorrect={isCorrect}
          correctAnswer={questionData.correct_answer}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
