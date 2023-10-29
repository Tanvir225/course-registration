import PropTypes from 'prop-types';
const Title_Cart = ({title,idx}) => {
    console.log(title);
    return (
        <h2 className='font-semibold text-gray-600'>{idx+1}. {title}</h2>
    );
};

Title_Cart.propTypes = {
    title: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
}
export default Title_Cart;