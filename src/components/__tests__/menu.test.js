import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA, REST_MENU } from "../../mocks/DummyData";
import store from "../../utils/store";
import Body from "../Body";
import "@testing-library/jest-dom"
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import CartSlice from "../../utils/cartSlice";

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: ()=> {
           return Promise.resolve(REST_MENU)
        }
    })
})

test("ADD ITEMS TO CART COMPONENT", async() => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
        <Header />
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    );
  
    await waitFor(()=> expect(body.getByTestId("menu")))
    const addBtn= body.getAllByTestId("addBtn")
   
    fireEvent.click(addBtn[0])
    
    const cart=body.getByTestId("cart")
    expect(cart.innerHTML).toBe("Cart 1 items")
  });