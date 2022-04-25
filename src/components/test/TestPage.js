import React,{useEffect} from 'react';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Questions from './Questions';
import { getTestDetails ,evaluateTest} from "../../actions/testActions";
import Countdown from 'react-countdown';

function TestPage({ questions, getTestDetails,evaluateTest ,choices,auth,user}) {
  useEffect(() => {
    getTestDetails();
  }, []);

  const navigate = useNavigate();

  const onSubmit = (e)=>{
     evaluateTest(choices);
     user.testTaken = true;
     navigate('/results');
  }

  if(auth === false){
    return navigate("/user/login")
  }
  return (
    <><div className='text-start display-6'>
      <i className='fa fa-clock text-danger'></i>{" "}
      <Countdown date={Date.now() + 1000*60*60} onComplete={(e)=>onSubmit(e)}></Countdown>
    </div>
      <h5 className='text-center display-5 mb-3'>Questions</h5>
      <div className='text-end mb-3'>
        <button className='btn btn-outline-danger' onClick={(e) => onSubmit(e)}>
          End Test
        </button>
      </div>
      {questions.map((question) => {
        return <Questions key={question.id} question={question} />;
      })}

      <div className='text-center'>
        <button
          className='btn btn-outline-success'
          onClick={(e) => onSubmit(e)}
        >
          Submit
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  questions: state.test.test,
  choices: state.test.choices,
  auth: state.user.isAuthenticated,
  user:state.user.user
});

export default connect(mapStateToProps, { getTestDetails,evaluateTest })(TestPage);