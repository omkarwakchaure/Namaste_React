import { useEffect, useState } from "react";
// import resListData from "../utils/data";
import RestoCard, { withPromotedLabel } from "./RestoCard";
import { Restaurant } from "../type/Type";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState<Restaurant[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );
  const RestaurantCardPromoted = withPromotedLabel(RestoCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like you are offline! Please check your internet.</h1>;
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 max-w-[1200px] mx-auto">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-solid border-black rounded mr-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="cursor-pointer bg-green-200 hover:bg-green-300 px-4 py-2 rounded mb-2 mr-2"
          onClick={() => {
            const filteredRestaurants = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="cursor-pointer bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 mb-2"
          onClick={() => {
            const filteredRestaurants = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurant(filteredRestaurants);
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top rated
        </button>
      </div>
      <div className="flex flex-wrap gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
              restaurant.info.promoted ? (
                <RestaurantCardPromoted restaurant={restaurant} />
              ) : (
                <RestoCard restaurant={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
