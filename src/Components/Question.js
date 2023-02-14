import React, { useState } from "react";
import { RxCross2, RxPlus } from "react-icons/rx";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className="content">
      <header className="question">
        <h3>{question}</h3>
        <button
          type="button"
          className="btn"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? <RxCross2 /> : <RxPlus />}
        </button>
      </header>
      <div className="answer">{showAnswer && <p>{answer}</p>}</div>
    </article>
  );
};

export default Question;
