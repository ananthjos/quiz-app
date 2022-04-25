import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getTestDetails} from '../../actions/testActions';

function TestDetails({test,getTestDetails,user,auth}) {

  useEffect(()=>{
    getTestDetails();
  },[])

  const navigate = useNavigate();

  const NavigateToTestPage = (e)=>{
       navigate('/test-page/questions')
  }

  if(auth === false){
    return navigate("/user/login");
  }
  return (
    <>
      <div className='container text-center'>
        <h1>Welcome to Quiz</h1>
        <ul className='list-group'>
          <li className='list-group-item mb-2'>Test Name : General Knowledge</li>
          <li className='list-group-item mb-2'>Duration : 1 hour</li>
          <li className='list-group-item mb-2'>Total Questions : {test.length}</li>
        </ul>
        <p>Note : Number of attempts is only limited to 1</p>

        <button type='button' className='btn btn-outline-danger btn-lg' onClick={(e) => NavigateToTestPage(e)}>
          Start Test
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  test: state.test.test,
  user: state.user.user,
  auth: state.user.isAuthenticated,
});

export default connect(mapStateToProps,{getTestDetails})(TestDetails)