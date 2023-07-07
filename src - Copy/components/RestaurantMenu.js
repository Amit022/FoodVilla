import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FETCH_REST_MENU, CARD_IMG_URL } from "../../constants.js";
// import { addItem, removeItem,getTotalAmount } from "../utils/cartSlice.js";
import useRestaurant from "../utils/useRestaurant.js";
import MenuCard from "./MenuCard.js";
import Shimmer, { MenuShimmer } from "./Shimmer";
import {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  getTotalAmount,
  removeItem,
} from "../utils/cartSlice";
import RestaurantInfo from "./RestaurantInfo.js";
import RestaurantMenuList from "./RestaurantMenuList.js";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log("id", id);
  const [quantity, setQuantity] = useState(0);

  const restaurant = useRestaurant(id);
  console.log("newww",restaurant);

  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    dispatch(addItem(item));
    dispatch(getTotalAmount());
  };

  const removeItemHandler = (item) => {
    dispatch(removeItem(item));
    dispatch(getTotalAmount());
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    // dispatch(getTotalAmount());
    // setQuantity((item)=> item.length + 1)

  };
  const handelAddItem = (item) => {
    dispatch(addItem(item));
    dispatch(getTotalAmount());
  };
  const handelDecrease = (item) => {
    dispatch(decreaseQuantity(item));
    // dispatch(getTotalAmount());
    // setQuantity((item)=> item.length - 1)
  };

  // if (!restaurant?.menu?.items) {
  //   return;
  // }
  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="">
      <RestaurantInfo {...restaurant?.info} />
      <RestaurantMenuList menu={restaurant?.menu} />

    </div>
    // <div className="py-2">
    //   <div className="flex bg-slate-100 w-full p-4 sticky top-0 z-20">
    //     <div className="ml-32 flex">
    //       <img
    //         className="h-44 mx-3 w-60 rounded-md"
    //         src={CARD_IMG_URL + restaurant.cloudinaryImageId}
    //       />
    //     </div>
    //     <div className="p-4">
    //       {/* <h1>Restuarant {id} </h1> */}
    //       <h1 className="font-bold text-3xl">{restaurant.name}</h1>
    //       <h2 className="text-xl">
    //         {restaurant.area + "," + restaurant.areaSlug}
    //       </h2>
    //       <h2>{"★ " + restaurant.avgRating}</h2>
    //       <span></span>
    //     </div>
    //   </div>

    //   <div>
    //     <h1 className="font-extrabold text-4xl pl-[120px] bg-yellow-100 mt-2">
    //       Menu
    //     </h1>
    //     <ul data-testid="menu" className="flex flex-wrap justify-center mx-4">
    //       {Object.values(restaurant?.menu?.items).map((item) => (
    //         <div className="bg-yellow-50 ml-[100px] my-4 p-2 w-[600px] rounded-3xl shadow-lg hover:shadow-2xl">
    //           <MenuCard key={item.id} {...item} />
    //           {/* <div>
    //             <div className="">
    //               <button
    //                 data-testid="addBtn"
    //                 className="p-1 ml-[280px] bg-green-400 rounded text-sm"
    //                 onClick={() => {
    //                   addItemHandler(item);
    //                 }}
    //               >
    //                 ADD +
    //               </button>
    //             </div>
    //           </div> */}
    //           <button
    //                 data-testid="add-Btn"
    //                 onClick={() => {
    //                   handelAddItem(item);
    //                 }}
    //                 className=" p-1 ml-20 bg-green-400 rounded text-sm "
    //               >
    //                 ADD +
    //               </button>
    //         </div>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
};
export default RestaurantMenu;
