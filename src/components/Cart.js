import { useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice.js';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="mb-8 font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
        {cartItems.length === 0 ? (
          <div className="font-semibold">
            Your Cart Is Empty
            <div className="mt-4">
              You can go to home page to view more restaurants
            </div>
            <button className="mt-8 p-2 bg-orange-400 text-white">
              <Link to="/">SEE RESTAURANTS HERE </Link>
            </button>
          </div>
        ) : (
          <button
            className="p-2 my-4 mx-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
