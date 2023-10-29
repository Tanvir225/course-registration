import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
const Course = ({ course }) => {
    const { image, course_title, course_description, price, credit } = course || {}
    return (
        <div className='bg-[#FFF] p-4 space-y-5 h-full'>
            <div className=''>
                <img src={image} className='w-full' alt={`image for : ${course_title}`} />
            </div>
            <h2 className='text-[#1C1B1B] text-lg font-bold'>{course_title}</h2>
            <p className='text-gray-400 text-sm font-semibold text-center'>{course_description}</p>
            <div className='flex justify-between items-center'>
                <p className='text-gray-700 text-sm font-bold flex items-center gap-4'><FaDollarSign className='text-gray-700 text-sm'></FaDollarSign>   Price : {price} </p>
                <p className='text-gray-700 text-sm font-bold flex items-center gap-4'><FaBookOpen className='text-gray-700 text-sm'></FaBookOpen>   Credit : {credit} hrs </p>
            </div>


            <button className='bg-[#2F80ED] text-white w-full rounded-lg p-2 hover:bg-black'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;