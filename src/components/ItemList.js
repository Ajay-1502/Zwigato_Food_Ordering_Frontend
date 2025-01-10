import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice.js';
import { Foodimg_URL } from '../utils/constant';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-4 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="font-semibold">
                - ₹{item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          {item.card.info.imageId ? (
            <div className="w-3/12 h-40 p-4 relative ">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Foodimg_URL + item.card.info.imageId}
              />
              <div className="absolute w-9/12 bottom-0 left-[100] transform -translate-x-1/2">
                <button
                  className="rounded-xl p-2 bg-white font-bold w-9/12 text-green-800 shadow-lg  m-auto hover:bg-yellow-300"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
            </div>
          ) : (
            <div className="bottom-0 my-2 transform -translate-x-10">
              <button
                className="rounded-xl py-2 px-8 bg-white font-bold w-12/12 text-green-800 shadow-lg  m-auto hover:bg-yellow-300"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default ItemList;
