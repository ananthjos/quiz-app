import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ registerUser, auth }) => {
  const [user, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setDetails({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    registerUser(user)
    // customerRegister(user);
  };

  if (auth) {
    navigate("/");
  }

  return (
    <div>
      <Link className='btn btn-sm mb-2' to='/'>
        <i className='fas fa-arrow-circle-left fa-2x'></i>
      </Link>
      <h4 className='text-center mb-3'>SignUp</h4>
      <form style={custom} className='mx-auto'>
        <div className='form-group'>
          <label htmlFor='name'>Name :</label>
          <input
            type='text'
            name='name'
            value={user.name}
            onChange={(e) => onChange(e)}
            required
            className='form-control form-control-sm '
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email :</label>
          <input
            type='email'
            name='email'
            value={user.email}
            onChange={(e) => onChange(e)}
            required
            className='form-control form-control-sm '
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password :</label>
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={(e) => onChange(e)}
            className='form-control form-control-sm '
            required
          />
        </div>
        <button
          type='submit'
          onClick={(e) => onSubmit(e)}
          className='btn btn-outline-primary btn-block btn-sm mt-4'
        >
          Register
        </button>
      </form>
      <h6 className='text-center mt-3'>
        <Link to='/customer/login'>
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
