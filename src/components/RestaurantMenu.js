import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './ShimmerUI';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  console.log(itemCards);

  return (
    <div className="res-info">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {'  ₹'}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
