import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = ({ loginUser, auth }) => {
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(userId);
  };

  if(auth) {
    return navigate("/test-details");
  }
  return (
    <div className='container'>
      <h4 className='text-center mb-3 display-5'>Login</h4>
      <form style={custom} className='mx-auto'>
        <div className='row'>
          <input
            type='text'
            name='userId'
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className='validate'
            placeholder="Login Id"
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

const custom = {
  width: "300px",
  height: "auto",
};

export default connect(mapStateToProps, { loginUser })(Login);
