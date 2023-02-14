import React, { useState } from "react";
import "./App.css";
import Question from "./Components/Question";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container">
      <h2>Frequently Asked Question's</h2>
      <section className="qa-container">
        {questions.map((question) => {
          return (
          <Question key={question.id} {...question}/>
          )
        })}
      </section>
    </div>
  );
}

export default App;
