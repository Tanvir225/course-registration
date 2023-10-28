import PropTypes from 'prop-types';
const Course = ({course}) => {
    const {image,course_title,course_description,price,credit} = course || {}
    return (
        <div className='bg-[#FFF] p-4'>
            <div>
                <img src={image} className='w-full' alt={`image for : ${course_title}`} />
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;