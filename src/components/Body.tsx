import { useEffect, useState } from "react";
// import resListData from "../utils/data";
import RestoCard from "./RestoCard";
import { Restaurant } from "../type/Type";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState<Restaurant[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // const restaurantCards = json?.data?.cards?.filter(
    //   (card: any) =>
    //     card?.card?.card?.["@type"] ===
    //     "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    // );

    // Map only valid restaurant objects (info) from nested structure
    // const restaurants: Restaurant[] = restaurantCards.map(
    //   (card: any) => card?.card?.card as Restaurant
    // );
    setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 max-w-[1200px] mx-auto">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded mr-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="cursor-pointer bg-black text-white px-4 py-2 rounded hover:bg-gray-700 mb-2 mr-2"
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
          className="cursor-pointer bg-black text-white px-4 py-2 rounded hover:bg-gray-700 mb-2"
          onClick={() => {
            const filteredRestaurants = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredRestaurants);
          }}
        >
          Top rated
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {filteredRestaurants.map((restaurant) => (
          <RestoCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
