import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-body text-center'>
          <h2 className=' display-5'>Welcome To Quiz APP</h2>
          <Link to='/user/login' className='link text-warning'>Please Login to attend the Test</Link>
        </div>
      </div>
    </div>
  );
}

export default Home