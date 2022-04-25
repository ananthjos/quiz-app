import React from 'react';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';


function Results({score,auth}) {

  const navigate = useNavigate();

  if(auth === false){
    return navigate("/user/login")
  }

  return (
    <div>
       <h5 className="text-center display-6">You Have Finished the Test Successfully</h5>

       <h4 className='text-center'>{score}</h4>
    </div>
  )
}
const mapStateToProps = (state)=>({
  score:state.test.result,
  auth:state.user.auth
})
export default connect(mapStateToProps)(Results)