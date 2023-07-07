import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
//   const cart = useSelector((store) => store.cart);
  const cartItems = useSelector((store) => store.cart.items);
  const getItemTotal = useSelector((store) => store.cart.cartTotalAmount);

//   const address = cart.deliveryAddress;
//   const payment = cart.paymentMethod;
//   const getItemTotal = useItemTotal();
  return (
    <div className="flex container mx-auto items-center justify-center mt-[150px] shadow-xl border-black">
      <div className="flex flex-col bg-white drop-shadow-md flex-2 p-6 w-[500px] items-center">
        <div className="flex justify-center items-center mb-2">
          <h1 className="text-lg mt-2.5 text-title font-bold ">
            Order Summary
          </h1>
        </div>
        <div className="flex flex-col w-[400px] justify-center border border-solid border-gray p-10">
          {Object.values(cartItems).map((item) => {
            return (
              <div className="my-3">
                <div className="flex items-center mt-2 justify-center">
                  <p className="px-2 w-48 text-sm">{item?.name}</p>
                  <div className="px-5">{item?.quantity}</div>
                  <p className="font-thin text-sm">
                  {"₹ " + Math.trunc(item?.price / 100) * item.quantity}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="border border-black my-2"></div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-sm ml-8">Paid</p>
            <p className="font-bold  text-sm mr-5">{"₹ " + getItemTotal/100}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
