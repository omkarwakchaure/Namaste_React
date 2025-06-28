import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {
    const cartItems = useSelector((store: any) => store.cart.items);
 
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(clearCart());
    };
    return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button onClick={handleClick} className="cursor-pointer p-2 m-2 bg-black text-white rounded-lg">Clear Cart</button>
        <ItemList items={cartItems} />
        {cartItems.length === 0 && <h1 className="text-md">Your cart is empty!</h1>}
      </div>
    </div>
  );
};

export default Cart;
