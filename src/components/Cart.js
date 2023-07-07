import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import store from "../utils/store";
import CheckOut from "./CheckOut";
import FoodItem from "./FoodItem";

const cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h2 className="text-3xl font-bold m-5 underline" data-testid="cart">
            Cart - {cartItems.length} food item/'s
          </h2>
        <div>
              <FoodItem/>
          {cartItems.length > 0 && (
            <button
              className="bg-red-500 hover:bg-red-600 rounded-lg p-1 m-3 text-white"
              onClick={() => {
                clearCartHandler();
              }}
            >
              Clear Cart
            </button>
          )}
          </div>
        </div>
        {cartItems.length > 0 && <CheckOut />}
      </div>
    </>
  );
};
export default cart;
