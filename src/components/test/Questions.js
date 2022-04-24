import React from 'react'

function Questions({question}) {
  return (
    <div>
      <p>
        {" "}
        <b>{question.id}</b> {question.question}
      </p>
      <div>
        <input type='radio' value={question.option1} id={question.option1} />
        <input type='radio' value={question.option2} id={question.option2} />
        <input type='radio' value={question.option3} id={question.option3} />
        <input type='radio' value={question.option4} id={question.option4} />
      </div>
    </div>
  );
}

export default Questions