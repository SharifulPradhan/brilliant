import React from 'react';
import CourseCard from '../CourseCard/CourseCard'
import data from '../../../data/data.json'

const TheRationalDetective = () => {
  const [courseData, setCourseData] = React.useState([]);
  console.log(courseData)
  React.useEffect(() =>{
    setCourseData(data.theRationalDetective)
  }, [])
  return (
    <section className="container mt-5">
      <header className="d-flex align-items-center">
        <div className="me-3 p-3 border" style={{ borderRadius: "50px", backgroundColor: '#E3E8FF', color:'rgb(117, 139, 255)' }}><span>2</span></div>
        <div>
          <h1>The Rational Detective</h1>
          <p>Eliminate the impossible and uncover the truth! <a href="/">Collapse</a></p>
        </div>
      </header>

      <div className="d-flex flex-wrap align-items-center ms-3">
        {
          courseData.map(course => <CourseCard course={course} key={course.id}></CourseCard>)
        }
      </div>
    </section>
  );
};

export default TheRationalDetective;