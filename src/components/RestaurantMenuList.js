// import CartFallback from "./cartFallback";
import RestaurantItemCategory from "./RestaurantItemCategory";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";
import { useSelector } from "react-redux";
import ItemQuantity from "./ItemQuantity";
import store from "../utils/store";
import { Link } from "react-router-dom";
import CartFallback from "./cartFallback";

const RestaurantMenuList = ({ menu }) => {
  const cartItems = useSelector((store) => store.cart.items);
  // const cartAmount = useSelector((store) => store.cart.cartTotalAmount);
  console.log("ndjdn", cartItems);
  // get cart items from redux store
  //  const cartItems = useSelector((store) => store.cart.items);
  // get total price for cart items
  const getItemTotal = useSelector((store) => store.cart.cartTotalAmount);

  return (
    <div className="flex justify-center">
      <div className="mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%] card-container">
        {menu.map((item, index) => (
          <div key={index}>
            {item.categories ? (
              <RestaurantNestedItemCategory nestedCategory={item} />
            ) : (
              <RestaurantItemCategory itemCategory={item} />
            )}
          </div>
        ))}
      </div>
      <div className="basis-[30%] flex ">
        {Object.values(cartItems).length > 0 ? (
          <div className=" card-container basis-[300px] p-[60px] pl-[20px] shadow-lg ml-5 mt-8">
            <h1 className="font-bold text-lg mt-2.5">Cart</h1>

            <p className="text-gray-count">
              {Object.values(cartItems).length} item
            </p>

            {Object.values(cartItems).map((item) => {
              return (
                <div className="flex items-center mt-2 justify-between">
                  <p className="w-40 text-sm">{item.name}</p>
                  <div className="w-30 px-5">
                    <ItemQuantity item={item} key={item.id} />
                  </div>

                  <p className="w-[50px] font-thin">
                    {"₹ " + Math.trunc(item.price / 100) * item.quantity}
                  </p>
                </div>
              );
            })}
            <div className="border border-gray my-4"></div>
            <div className="flex justify-between mt-4">
              <p className="text-sm text-bio ">Sub Total</p>
              {"₹ " + getItemTotal/100}
            </div>
            <div className="flex justify-center mt-10">
              <Link to="/cart">
                {" "}
                <button className=" px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur bg-yellow-300">
                  {" "}
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="card-container w-[348px] mt-12 ml-12">
            <CartFallback
                text={
                  "Good food is always cooking! Go ahead, order some yummy items from the menu."
                }
              />
            {/* <h1>hellllo</h1> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuList;
