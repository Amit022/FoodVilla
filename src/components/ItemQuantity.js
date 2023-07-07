import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addItem, removeItem } from "../utils/cartSlice";
import {
    addItem,
    increaseQuantity,
    decreaseQuantity,
    getTotalAmount,
    removeItem,
  } from "../utils/cartSlice";

const ItemQuantity = ({ item }) => {
  const { id } = item;
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);

  const handelAddItem = (item) => {
    dispatch(addItem(item));
    dispatch(getTotalAmount());
  };
  const handelDecrease = (item) => {
    dispatch(decreaseQuantity(item));
    dispatch(getTotalAmount());
  };

  return (
    <div className="flex border border-gray w-16 justify-around items-center">
      <button
        onClick={() => {
          handelDecrease(item);
        }}
        className="text-xl"
      >
        -
      </button>
      <p className="text-sm text-green-900">{item?.quantity}</p>
      <button
        className="hover:scale-110 delay-100 transition-all "
        onClick={() => {
          handelAddItem(item);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantity;
