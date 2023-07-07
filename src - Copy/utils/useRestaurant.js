import React, { useState, useEffect } from "react";
import { FETCH_REST_MENU } from "../../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    try {
      const data = await fetch(FETCH_REST_MENU + id);
      const res_data = await data.json();
      const menuItemsList =
        res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
      const itemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const NestedItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

      const menu = menuItemsList.map((item) => {
        if (
          item.card.card["@type"] === itemCategory ||
          item.card.card["@type"] === NestedItemCategory
        ) {
          return item.card.card;
        }
      });

      const modifiedData = {
        info: res_data.data.cards[0].card.card.info,
        menu: menu.filter((value) => value !== undefined),
      };

      console.log("ResMenu", modifiedData);

      setRestaurant(modifiedData);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("djbdh", restaurant);

  return restaurant;
};
export default useRestaurant;
