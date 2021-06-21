import React from 'react';
import courseLogo from '../../../images/logic-bg.png'

const CourseDetails = () => {
  return (
    <section style={{ backgroundColor: '#F8F8F8' }}>
      <div className="container mt-5">
        <a href="/" className="nav-link text-secondary pt-5"> <span>&#60;</span> Back to all courses</a>

        <div className='row ps-3 pe-5 pb-5 pt-3'>

          <div className='col-lg-7 col-sm-12 pe-5'>
            <h1>Logic</h1>
            <h4 className='mt-3'>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h4>
            <p className='mt-4'>The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.</p>
            <p className='mt-4'>You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges! <a href="/readmore">Read more</a></p>
            <a href="/">View prerequisites and next steps</a>
          </div>

          <div className='col-lg-5 col-sm-12 d-flex flex-column align-items-center border bg-white pt-5 pb-5' style={{width:"100%", maxWidth: "496px"}}>
            <img src={courseLogo} alt=""/>

            <div className='d-flex'>
              <div className="me-5">
                <h1>37</h1>
                <p>Interactive quizzes</p>
              </div>

              <div>
                <h1>265+</h1>
                <p>Concepts and exercises</p>
              </div>
            </div>

            <button className="btn-blue">Continue Course</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CourseDetails;