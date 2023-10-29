import PropTypes from 'prop-types';
import { useState } from 'react';

import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
const Course = ({ course, coursesTitleHandler, courseCredit }) => {

    const { image, course_title, course_description, price, credit } = course || {}

    //toggle eventhandler
    const [select, setSelect] = useState(true)
    
    const toggle = () => {

        if (courseCredit < 20) {
            setSelect(!select)
        }
        else if (courseCredit === 20) {
            setSelect(select)
        }
        else{
            setSelect(!select)
        }
    }

    return (
        <div className='bg-[#FFF] p-4 space-y-5  rounded-lg'>
            <div className=''>
                <img src={image} className='w-full' alt={`image for : ${course_title}`} />
            </div>
            <h2 className='text-[#1C1B1B] text-lg font-bold'>{course_title}</h2>
            <p className='text-gray-400 text-sm font-semibold text-center'>{course_description}</p>
            <div className='flex justify-between items-center'>
                <p className='text-gray-700 text-sm font-bold flex items-center gap-4'><FaDollarSign className='text-gray-700 text-sm'></FaDollarSign>   Price : {price} </p>
                <p className='text-gray-700 text-sm font-bold flex items-center gap-4'><FaBookOpen className='text-gray-700 text-sm'></FaBookOpen>   Credit : {credit} hrs </p>
            </div>



            <button onClick={() => { coursesTitleHandler(course); toggle() }} className='bg-[#2F80ED] text-white w-full rounded-lg p-2 hover:bg-black ' >{select ? "Select" : "Remove"}</button>



        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    coursesTitleHandler: PropTypes.func.isRequired,
    //toggle:PropTypes.func.isRequired,
    select: PropTypes.bool.isRequired,
    courseCredit: PropTypes.number.isRequired
}

export default Course;