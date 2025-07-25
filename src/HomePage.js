import React, { useState } from "react";

function HomePage({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    difficulty: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.difficulty) {
      setError("All fields are required.");
      return;
    }
    setError("");
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Welcome to the Open Trivia Quiz!</h2>
      <p>Please enter your name and select a category and difficulty.</p>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="9">General Knowledge</option>
          <option value="18">Science: Computers</option>
          <option value="23">History</option>
          <option value="21">Sports</option>
        </select>
      </label>

      <label>
        Difficulty:
        <select
          name="difficulty"
          value={form.difficulty}
          onChange={handleChange}
        >
          <option value="">Select difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      {error && <p className="error">{error}</p>}
      <button type="submit">Start Quiz</button>
    </form>
  );
}

export default HomePage;
