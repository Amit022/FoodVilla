import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/DummyData";
import store from "../../utils/store";
import Body from "../Body";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});




test("should render the shimmer UI component", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);

  //   const shimmer = body.getByTestId("shimmer")

  //   expect(shimmer.children.length).toBe(15)
  //   console.log(shimmer)
});

test("takes the search input string in body component", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target: {
      value: "momo",
    },
  });
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(1);
});

// test("filter functionality", async () => {
//   const body=render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );
//   await waitFor(()=> body.getByTestId("search-btn"))

//   const input= body.getByTextId("search-input")
//   fireEvent.change(input, {
//     target: {
//         value:"momo",
//     }
//   })
//   const Searchbtn = body.getByTestId("search-btn")
//   fireEvent.click(Searchbtn)
//   const resList=body.getByTestId("res-list")
//   expect(resList.children.length).toBe(1)

// });

