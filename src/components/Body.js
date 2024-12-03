import resList from '../utils/mockData.js';
import RestaurantCard from './RestaurantCard.js';

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resObj) => (
          <RestaurantCard key={resObj.info.resId} resData={resObj} />
        ))}
      </div>
    </div>
  );
};
export default Body;
