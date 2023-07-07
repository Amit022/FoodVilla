import { useEffect, useState } from "react";
import RestrauantCard from "../components/RestuarantCard";
import { restuarantList } from "../../constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Profile from "./ProfileClass";
import filterData from "../utils/Helper";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import userInfo from "../utils/useContext";

// loads => show the initial page => call API => update the UI.
//we can write only JS expression but not statement
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(userInfo);

  //useEffect is a hook which is a normal JS function which takes two paramerters
  //one is callback function and another one is dependency array.
  //empty dependency array then it will run after initial render.
  //shimmer UI until the page loads

  useEffect(() => {
    getRestaurants();
  }, []);

  const filterData = (searchTxt, allRestaurants) => {
    console.log(searchTxt, allRestaurants, "dnjdndn");
    const filteredData = allRestaurants.filter((restro) =>
      restro?.data?.name?.toLowerCase().includes(searchTxt?.toLowerCase())
    );
    console.log("filter", filteredData);
    return filteredData;
  };

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5064947&lng=88.3573232&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  const offline = useOnline();
  if (!offline) {
    return <h1>Please Check Ur Internet Connection</h1>;
  }

  //conditional rendering
  // if restaurant is empty => shimmer UI
  // if data is present => actual UI

  // if component not render (early return)
  //   if(!allRestaurants) return null
  console.log("lsojsn",allRestaurants.length)
  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="my-5 p-1 mt-[110px] bg-pink-50">
        <div className="ml-[450px]">
          <input
            data-testid="search-input"
            className="focus:bg-green-50 m-2 p-2 w-96 ml-15 rounded-md outline-none bg-gray ring-gray"
            type="text"
            placeholder="Search for restaurant"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button
            data-testid="search-btn"
            className="m-2 p-2 text-white bg-purple-900 rounded-md"
            onClick={() => {
              //needs to filter the data
              //filter the data
              // update the component
              const data = filterData(searchTxt, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>

        {/* <input 
        value={user.name}
        className="input-field"
         onChange={e=> 
          setUser({
            ...user,
            name:e.target.value
          })
        
         }/> */}
      </div>
      <div
        className="px-11 flex flex-wrap justify-center"
        data-testid="res-list"
      >
        {filteredRestaurants?.length === 0 ? (
          <h1>No restro found</h1>
        ) : (
          filteredRestaurants?.map((restuarant) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={"/restaurant/" + restuarant.data.id}
                key={restuarant.data.id}
              >
                <RestrauantCard {...restuarant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
