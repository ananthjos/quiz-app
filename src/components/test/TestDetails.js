import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getTestDetails} from '../../actions/testActions';

function TestDetails({test,getTestDetails}) {

  useEffect(()=>{
    getTestDetails();
  },[])

  const navigate = useNavigate();

  const NavigateToTestPage = (e)=>{
       navigate('/test-page/questions')
  }

  return (
    <>
      <div>
        <h1>Welcome to Quiz</h1>
         <ul>
           <li>Test Name : General Knowledge</li>
           <li>Duration : 1 hour</li>
           <li>Total Questions : {test.length}</li>
         </ul>
        <p>Note : Number of attempts is only limited to 1</p>

        <button type='button' onClick={(e)=>NavigateToTestPage(e)}>Start Test</button>
      </div>
    </>
  )
}

const mapStateToProps = (state)=>({
  test:state.test.test
})

export default connect(mapStateToProps,{getTestDetails})(TestDetails)