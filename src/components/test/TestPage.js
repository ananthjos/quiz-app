import React from 'react';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Questions from './Questions';

function TestPage({questions}) {
  console.log(questions);
  return (
        <>
          {questions.map((question=>{
            return <Questions key={question.id} question={question}/>
          }))}
        </>
  )
}

const mapStateToProps = (state)=>({
   questions:state.test.test
})

export default connect(mapStateToProps)(TestPage);