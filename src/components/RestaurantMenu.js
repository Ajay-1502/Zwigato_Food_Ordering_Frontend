import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './ShimmerUI';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  return (
    <div className="text-center">
      <h1 className="font-extrabold text-2xl mt-6 mb-2">{name}</h1>
      <p className="font-semibold">
        Explore & Order From Our Wide Range Of Cuisines
      </p>

      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
