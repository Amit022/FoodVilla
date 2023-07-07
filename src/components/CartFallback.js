import React from "react";
// import { NavLink } from "react-router-dom";
// import { CART_FALLBACK_IMG } from "../config";

const CartFallback = ({ text, btnText }) => {
	return (
        <div className="flex flex-col justify-center items-center">
			<img src="https://cdn.pixabay.com/photo/2014/04/03/10/00/shopping-cart-309592__340.png" alt="" className="h-[200px] w-[200px]" />
			<h2 className="px-14 pt-8 my-4">{text}</h2>
            </div>
	);
};

export default CartFallback;