import React,{useEffect} from 'react';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Questions from './Questions';
import { getTestDetails ,evaluateTest} from "../../actions/testActions";

function TestPage({ questions, getTestDetails,evaluateTest ,choices,auth}) {
  useEffect(() => {
    getTestDetails();
  }, []);

  const navigate = useNavigate();

  const onSibmit = (e)=>{
     evaluateTest(choices);
     navigate('/results');
  }

  if(auth === false){
    return navigate("/user/login")
  }
  return (
    <>
      <h5 className='text-center display-5 mb-3'>Questions</h5>
      <div className='text-end mb-3'>
        <button className='btn btn-outline-danger'>End Test</button>
      </div>
      {questions.map((question) => {
        return <Questions key={question.id} question={question} />;
      })}

      <div className='text-center'>
        <button
          className='btn btn-outline-success'
          onClick={(e) => onSibmit(e)}
        >
          Submit
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state)=>({
   questions:state.test.test,
   choices:state.test.choices,
   auth:state.user.auth
})

export default connect(mapStateToProps, { getTestDetails,evaluateTest })(TestPage);