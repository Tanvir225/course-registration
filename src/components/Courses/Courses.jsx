import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';
const Courses = ({coursesTitleHandler}) => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('courses.json')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    return (
        <div className="grid grid-cols-1 gap-4 mt-10  md:w-[75%] md:mx-auto md:grid-cols-2 lg:w-[75%] lg:mx-auto lg:grid-cols-3">
            {
            courses.map(course => <Course  coursesTitleHandler={coursesTitleHandler}   key= {course.id} course={course}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    coursesTitleHandler: PropTypes.func.isRequired,
    //toggle: PropTypes.func.isRequired,
    //select: PropTypes.bool.isRequired,
   // getCourse: PropTypes.func.isRequired,
 
}
export default Courses;