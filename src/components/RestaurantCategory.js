import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategory = (props) => {
  const [showItems, setShowItems] = useState(false);
  const { data } = props;

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4  shadow-xl p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? '⬆️' : '⬇️'}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
