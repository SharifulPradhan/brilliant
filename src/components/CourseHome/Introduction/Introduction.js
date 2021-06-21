import React from 'react';
import CourseCard from '../CourseCard/CourseCard'
import data from '../../../data/data.json'

const Introduction = () => {
  const [courseData, setCourseData] = React.useState([]);
  console.log(courseData)
  React.useEffect(() =>{
    setCourseData(data.introduction)
  }, [])
  return (
    <section className="container mt-5">
      <header className="d-flex align-items-center">
        <div className="me-3 p-3 border" style={{ borderRadius: "50px", backgroundColor: '#E3E8FF', color:'rgb(117, 139, 255)' }}><span>1</span></div>
        <div>
          <h1>Introduction</h1>
          <p>Put your logic to the test with these warmups!</p>
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

export default Introduction;