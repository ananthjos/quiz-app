import React from "react";
import { connect } from "react-redux";
import Countdown from "react-countdown";
import {evaluateTest } from "../../actions/testActions";
import { useNavigate } from "react-router-dom";

function Navbar({ choices, user }) {

  const navigate = useNavigate();

  const onSubmit = (e) => {
    evaluateTest(choices);
    user.testTaken = true;
    navigate("/results");
  };

  
  return (
    <div className='sticky'>
      <div className='text-start display-6'>
        <i className='fa fa-clock text-danger'></i>{" "}
        <Countdown
          date={Date.now() + 1000 * 60 * 60}
          onComplete={(e) => onSubmit(e)}
        ></Countdown>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  choices: state.test.choices,

  user: state.user.user,
});
export default connect(mapStateToProps)(Navbar);
