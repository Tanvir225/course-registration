import PropTypes from 'prop-types';
import Title_Cart from '../Title_Cart/Title_Cart';
import Credit_Cart from '../Credit_Cart/Credit_Cart';
const Cart = ({coursesTitle,courseCredit,totalPrice,remainCredit}) => {
    return (
        <div className=" mt-10 space-y-5 bg-white p-4 rounded-lg md:w-1/4 md:mx-auto lg:w-1/4 lg:mx-auto h-fit">
            <h2 className="text-[#2F80ED] text-lg font-bold border-b-2 p-2">Credit Hour Remaining {remainCredit} hrs</h2>
            <h2 className="text-[#1C1B1B] font-bold border-b-2 p-2">Course Name</h2>
            <div className='p-2 space-y-4 border-b-2'>
                {
                    coursesTitle.map((title,id)=> <Title_Cart key={id} idx={id} title={title}></Title_Cart>)
                }
            </div>
           <Credit_Cart courseCredit={courseCredit} totalPrice={totalPrice}></Credit_Cart>
           

        </div>
    );
};

Cart.propTypes ={
    coursesTitle : PropTypes.array.isRequired,
    courseCredit : PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    remainCredit: PropTypes.number.isRequired
}
export default Cart;