import React from 'react'
import './CourseList.css'; 
import React, { useState, useEffect } from "react";
import axios from "axios";



const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    axios
      .get("http://localhost:5000/courses_data")  // Flask backend API URL
      .then((response) => {
        setCourses(response.data);  // Set courses state with response data
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching courses!");
        setLoading(false);
      });
  }, []);


  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


const Courses = () => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <div className="course-card" >
          <h3>{course.course_title}</h3>
          <p>Certificate Type: {course.course_Certificate_type}</p>
          <p>Difficulty: {course.course_difficulty}</p>
          <p>Rating: {course.course_rating}</p>
          <p>Students Enrolled: {course.course_students_enrolled}</p>
        </div>
      ))}
    </div>
  )
}

export default Courses