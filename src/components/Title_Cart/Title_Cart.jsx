import PropTypes from 'prop-types';
const Title_Cart = ({ title, idx, removeHandle }) => {
    //console.log(title);
    return (
        <h2 className='font-semibold text-gray-600 flex'>{idx + 1}. {title} <button onClick={() => removeHandle(title)} className=' ml-2 bg-red-600 px-2 py-1 rounded-lg text-white flex-1 hover:bg-black'>Remove</button></h2>
    );
};

Title_Cart.propTypes = {
    title: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    removeHandle: PropTypes.func.isRequired,
}
export default Title_Cart;