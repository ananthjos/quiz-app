import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ registerUser, auth }) => {
  
  const [userName,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const sumbitFormData = (e)=>{
    e.preventDefault();
    registerUser({userName:userName})
  }
 
  if(auth) {
    navigate("/test-details");
  }

  return (
    <div>
      <Link className='btn btn-sm mb-2' to='/'>
        <i className='fas fa-arrow-circle-left fa-2x'></i>
      </Link>
      <h4 className='text-center mb-3 display-5'>Register</h4>
      <form
        style={custom}
        className='mx-auto'
        onSubmit={(e) => sumbitFormData(e)}
      >
        <div className='row'>
          <label htmlFor='name'>Name :</label>
          <input
            type='text'
            name='name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className='form-control form-control-sm '
            autoComplete='off'
          />
        </div>
        <div className='row'>
          <label htmlFor='email'>Email :</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          
            className='form-control form-control-sm '
            autoComplete='off'
          />
        </div>
        <div className='row'>
          <label htmlFor='password'>Password :</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control form-control-sm '
            
            autoComplete='off'
          />
        </div>
        <div className='row'>
          <button
            type='submit'
            className='btn btn-outline-primary btn-block btn-sm mt-4'
          >
            Register
          </button>
        </div>
      </form>
      <h6 className='text-center mt-3'>
        <Link to='/user/login'>
          <span>Already registered ? Login</span>{" "}
        </Link>
      </h6>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.isAuthenticated,
});

const custom = {
  width: "300px",
  height: "auto",
};
export default connect(mapStateToProps, { registerUser })(Register);
