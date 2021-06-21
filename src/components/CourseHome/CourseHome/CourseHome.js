import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import CourseDetails from '../CourseDetails/CourseDetails';
import Introduction from '../Introduction/Introduction';
import TheRationalDetective from '../TheRationalDetective/TheRationalDetective'

const CourseHome = () => {
  return (
    <div>
      <Header></Header>
      <CourseDetails></CourseDetails>
      <Introduction></Introduction>
      <TheRationalDetective></TheRationalDetective>
    </div>
  );
};

export default CourseHome;