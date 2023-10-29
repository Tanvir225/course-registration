import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('courses.json')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    return (
        <div className="grid grid-cols-1 gap-4 mt-10 md:w-2/3 md:mx-auto md:grid-cols-2 lg:w-2/3 lg:mx-auto lg:grid-cols-3">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;