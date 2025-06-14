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
    <div className="w-[200px] h-auto cursor-pointer bg-amber-100  border border-transparent hover:border-black p-2">
      <img
        className="w-[190px] h-[160px]"
        src={CLOUDINARY_URL + cloudinaryImageId}
        alt="restlogo"
      />
      <h1 className="text-2xl">{name}</h1>
      <h1 className="text-xl">{locality}</h1>
      <h2 className="text-lg">Cost for two: {costForTwo}</h2>
      <h3 className="text-sm">Rating: {avgRating} ⭐</h3>
    </div>
  );
};

export default RestoCard;
