import { JSX } from "react";
import { Restaurant } from "../type/Type.tsx";
import { CLOUDINARY_URL } from "../utils/urls";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestoCard = ({ restaurant }: RestaurantCardProps): JSX.Element => {
  const { cloudinaryImageId, name, locality, costForTwo, avgRating } =
    restaurant.info;

  return (
    <div className="w-[250px] h-auto cursor-pointer rounded-lg bg-gray-200  border border-transparent hover:border-gray-400 p-2">
      <img
        className="w-[230px] h-[160px] rounded-lg"
        src={CLOUDINARY_URL + cloudinaryImageId}
        alt="restlogo"
      />
      <h1 className="font-bold py-2 text-lg">{name}</h1>
      <h1 className="text-md">{locality}</h1>
      <h2 className="text-md">Cost for two: {costForTwo}</h2>
      <h3 className="text-sm">Rating: {avgRating} ⭐</h3>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard: any) => {
  return (props: any) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestoCard;
