import React, { Children, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  UNSAFE_RouteContext,
} from "react-router-dom";
// import About from "./src/components/About.js";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Profile from "./src/components/Profile";
import Shimmer from "./src/components/Shimmer";
import userInfo from "./src/utils/useContext";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/components/Cart";
import OrderSummary from "./src/components/OrderSummary";
// import Instamart from "./src/components/Instamart";

const Instamart = lazy(() => import("./src/components/Instamart"));
const About = lazy(() => import("./src/components/About.js"));
//upon on Demand loading --> upon render --> suspend loading

//React.createElement gives us the object => HTML(dom)
// const heading1=React.createElement(
//     "h1",
//     {
//         id:"heading 2",
//         key:"h2"
//     },
//     "Heading 2 for Namaste react"
// );

// const container= React.createElement(
//     "div",
//     {
//         id:"container"
//     },
//     [heading,heading1]
// );

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Amit Agarwal",
    email: "chowdhuryamit222@gmail.com",
  });
  return (
    <Provider store={store}>
      <userInfo.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </userInfo.Provider>
    </Provider>
  );
};
/**
 * suppose if we have 100's of components and if parcel bundles all in one js file
 * then app will be slow so we need to do code splitting or chunking or dynamic bundling or lazy loading all are same.
 * chunking
 * dynamic bundling
 * code splitting
 * lazy loading
 * on Demand loading
 * dynamic import
 */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          //nested component
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <OrderSummary/>,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
