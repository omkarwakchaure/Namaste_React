import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";

const ItemList = ({ items }: any) => {
  const dispatch = useDispatch();

  const handleItemClick = (item: any) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item: any) => (
        <div key={item.card.info.id}>
          <div className="relative p-4 m-2 border-b-2 border-gray-300 text-left rounded-md shadow-sm bg-white">
            {/* Add Button - Top Right */}
            <div className="absolute top-2 right-2">
              <button
                onClick={() => handleItemClick(item)}
                className="px-3 py-1 rounded-md bg-black text-white text-sm shadow-md hover:bg-gray-800 cursor-pointer"
              >
                Add +
              </button>
            </div>

            {/* Name & Price */}
            <div className="mb-1">
              <span className="font-medium">{item.card.info.name}</span>
              <span className="text-gray-600">
                {" "}
                - ₹ {item.card.info.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700">
              {item.card.info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
