import React,{useEffect,useState} from 'react';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Questions from './Questions';
import { getTestDetails ,evaluateTest} from "../../actions/testActions";
import { saveTestDetails } from '../../actions/userActions';
import Pagination from '../layout/Pagination';
import Navbar from '../layout/Navbar';

function TestPage({ questions, getTestDetails,evaluateTest ,choices,auth,user,saveTestDetails}) {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(1);

  useEffect(() => {
    getTestDetails();
  }, []);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    evaluateTest(choices);
    user.testTaken = true;
    saveTestDetails(user)
    navigate("/results");
  };

  // Get current question
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  console.log(currentQuestions);

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= 10) {
      setCurrentPage(pageNumber);
    }
  };

  if (auth === false) {
    return navigate("/user/login");
  }

  if (user.testTaken === true) {
    return navigate("/taken");
  }
  return (
    <>
      <Navbar/>
      <h5 className='text-center display-5 mb-3'>Questions</h5>
      <div className='text-end mb-3'>
        <button className='btn btn-outline-danger' onClick={(e) => onSubmit(e)}>
          End Test
        </button>
      </div>
      {currentQuestions.map((question)=>{
        return <Questions  key={question.id} question={question} />;
      })}
      

      <Pagination
        questionsPerPage={questionsPerPage}
        totalQuestions={questions.length}
        paginate={paginate}
        currentPage={currentPage}
      />

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

export default connect(mapStateToProps, { getTestDetails,evaluateTest ,saveTestDetails})(TestPage);