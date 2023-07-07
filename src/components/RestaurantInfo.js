import React from "react";
// import { RES_IMG_CDN } from "../config";
// import { AiFillStar } from "react-icons/ai";
import { CARD_IMG_URL } from "../../constants";

const RestaurantInfo = (restaurant) => {
  console.log("hndjhdbd", restaurant);
  return (
    <div className="flex bg-slate-100 w-full p-4 sticky top-0 z-20 mt-[100px]">
        <div className="ml-32 flex">
          <img
            className="h-44 mx-3 w-60 rounded-md"
            src={CARD_IMG_URL + restaurant?.cloudinaryImageId}
          />
        </div>
        <div className="p-4">
          {/* <h1>Restuarant {id} </h1> */}
          <h1 className="font-bold text-3xl">{restaurant?.name}</h1>
          <p className="overflow-hidden">
            {restaurant?.cuisines.join(", ")}
          </p>
          <h2>{"★ " + restaurant?.avgRating}</h2>
          <h4>{restaurant?.costForTwoMessage}</h4>
          <span></span>
        </div>
      </div>
  );
};

export default RestaurantInfo;
