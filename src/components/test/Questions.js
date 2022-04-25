import React, { useState } from "react";
import { connect } from "react-redux";
import { geTotalMcqChoices } from "../../actions/testActions";


function Questions({ question, geTotalMcqChoices ,choices}) {
  const [choice, setChoice] = useState("");
  return (
    <div className='card mb-3'>
      <p className='card-body'>
        {" "}
        <b>{question.id}</b> {question.question}
      </p>
      <div className='form-check'>
        <div className='mb-2'>
          <input
            type='radio'
            value={question.option1}
            name={question.option1}
            onChange={(e) => {
              setChoice(e.target.value);
             geTotalMcqChoices(question.id,e.target.value);
            }}
          />{" "}
          {question.option1}
        </div>

        <div className='mb-2'>
          <input
            type='radio'
            value={question.option2}
            name={question.option1}
            onChange={(e) => {setChoice(e.target.value)
            geTotalMcqChoices(question.id,e.target.value);
            }}
            
          />{" "}
          {question.option2}
        </div>
        <div className='mb-2'>
          <input
            type='radio'
            value={question.option3}
            name={question.option1}
            onChange={(e) => {setChoice(e.target.value)
            geTotalMcqChoices(question.id,e.target.value);
            }}
          />{" "}
          {question.option3}
        </div>
        <div className='mb-2'>
          <input
            type='radio'
            value={question.option4}
            name={question.option1}
            onChange={(e) => {setChoice(e.target.value)
            geTotalMcqChoices(question.id,e.target.value);
            }}
          />{" "}
          {question.option4}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>({
  choices:state.test.choices,
})

export default connect(mapStateToProps,{ geTotalMcqChoices })(Questions);
