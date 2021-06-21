import React from 'react';
import './CourseCard.css';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
  const {img, chapterTitle, details} = course;
  return (
    <Link to="/warmup-puzzles" className="text-dark" style={{textDecoration: "none"}}><div className="cardDesign ms-3" >
    <div className="bg-white p-4 pb-5">
      <img src={img} alt="" />
      <h4 className="mt-4">{chapterTitle}</h4>
      <p className="mb-4">{details}</p>
      <div className="progress"><span style={{ width: "100%", backgroundColor: "#758bff" }} ></span></div>
    </div>
  </div></Link>
  );
};

export default CourseCard;