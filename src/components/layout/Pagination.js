import React from 'react'

function Pagination({ questionsPerPage, totalQuestions, paginate, currentPage }) {

 const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalQuestions / questionsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination-buttons'>
      <div>
        <button
          className='btn btn-success btn-lg'
          onClick={() => paginate(currentPage - 1)}
        >
          Previous
        </button>
      </div>
      <div>
        <button
          className='btn btn-success btn-lg'
          onClick={() => paginate(currentPage + 1)}
        >
          {" "}
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination