import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ loginUser, auth }) => {
  const [user, setDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setDetails({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(user);
  };

  if (auth) {
    return navigate("/");
  }
  return (
    <div className='row'>
      {/* <h4 className='text-center mb-3'>Login</h4> */}
      <form className='col s8'>
        <div className='row'>
          <label htmlFor='email'>Email :</label>
          <input
            type='email'
            name='email'
            value={user.email}
            onChange={(e) => onChange(e)}
            required
            className='validate'
          />
        </div>
        <div className='row'>
          <label htmlFor='password'>Password :</label>
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={(e) => onChange(e)}
            className='validate'
            required
          />
        </div>
        <div className='row'>
          <button
            type='submit'
            className='btn btn-outline-primary btn-block btn-sm mt-4'
            onClick={(e) => onSubmit(e)}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(Login);
