import PropTypes from 'prop-types';
const Credit_Cart = ({ courseCredit,totalPrice }) => {
    return (
        <div className='font-bold text-gray-700 p-2 text-sm space-y-5'>
            <h2  className='border-b-2 p-2'>Total Credit Hour : {courseCredit}</h2>
            <h2 className='p-2'>Total Price : {totalPrice} USD</h2>
        </div>

    );
};

Credit_Cart.propTypes = {
    courseCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default Credit_Cart;