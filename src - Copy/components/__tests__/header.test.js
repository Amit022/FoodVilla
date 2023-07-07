import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { testEnvironment } from "../../../jest.config";
import store from "../../utils/store";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";

test("logo should render on header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  console.log("ndjdn", logo);

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("cart should have 0 items render on header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");
  // console.log(cart.innerHTML);

  expect(cart.innerHTML).toBe("Cart 0 items");
});

test("cart should home button render on header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const home = header.getByTestId("home");
  // console.log(cart.innerHTML);

  expect(home.innerHTML).toBe("Home");
});

test("cart should about button render on header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const about = header.getByTestId("about");
  // console.log(cart.innerHTML);

  expect(about.innerHTML).toBe("About Us");
});

// test("logout button render on click of login", () => {
//     const header = render(
//       <StaticRouter>
//         <Provider store={store}>
//           <Header />
//         </Provider>
//       </StaticRouter>
//     );
//     const loginBtn = header.getAllByTestId("loginBtn");
//     fireEvent.click(loginBtn)
//     expect(header).toBeInTheDocument("LOGOUT");
//   });
