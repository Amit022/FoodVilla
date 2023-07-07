import { useState, useContext } from "react";
import Logo from "../Assets/images/logo.png";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedUserIn, loggedUserOut } from "../utils/userInfoSlice";
import { clearCart } from "../utils/cartSlice";
import {
  faTag,
  faUserMinus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";

const Title = () => (
  <img className="h-24 p-1" data-testid="logo" alt="logo" src={Logo} />
);

const loggedIn = () => {
  //makes an api call to check where user is logged in or not
  return true;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showModel, setShowModel] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.items);
  const user1 = useSelector((store) => store.userInfo);
  console.log("bdhbdi", cartItems, user1);

  // const { user }= useContext(userInfo)

  const setLoggedUserOut = (value) => {
    // console.log("nhdjdh")
    dispatch(clearCart());
    dispatch(loggedUserOut(value));
  };
  const checkLoggedIn = () => {
    if (user1.isLoggedIn == false) {
      setShowModel(true);
    } else {
      navigate("/cart");
    }
  };
  // console.log("ndudh",user?.isLoggedIn)
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow bg-white shadow-md fixed top-0 left-0 w-full h-[100px] z-50">
      {<Title />}
      {/* {console.warn("any piece of JS Code we can write within curly braces")} */}
      <div className="ml-[800px]">
        <ul className="flex py-10">
          <li className="px-4">
            <Link
              to="/"
              data-testid="home"
              style={{
                textDecoration: "none",
                color: "hsl(0deg 24% 9% / 80%)",
              }}
            >
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/about"
              data-testid="about"
              style={{
                textDecoration: "none",
                color: "hsl(0deg 24% 9% / 80%)",
              }}
            >
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "hsl(0deg 24% 9% / 80%)",
              }}
            >
              Contact
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/instamart"
              style={{
                textDecoration: "none",
                color: "hsl(0deg 24% 9% / 80%)",
              }}
            >
              INSTAMART
            </Link>
          </li>
          <li className="px-2 hover:text-slate-300">
            <Link
              to="/cart"
              data-testid="cart"
              style={{
                textDecoration: "none",
                color: "hsl(0deg 24% 9% / 80%)",
              }}
            >
              <button className="relative flex" onClick={checkLoggedIn}>
                <svg
                  className="flex-1 w-10 h-9 fill-current"
                  viewBox="0 0 27 27"
                >
                  <path
                    fill="black"
                    d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
                  />
                </svg>
                <span
                  data-testid="cart"
                  className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center"
                >
                  {cartItems.length}
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
      {/* <h2 style={{ fontSize:"15px",marginTop:"35px"}}>{user.name}</h2> */}
      {user1?.isLoggedIn ? (
        <Link to="/">
          <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            className="pr-4 m-11"
            onClick={() => {
              setLoggedUserOut(false);
            }}
          >
            <span className="py-2 px-2  bg-red-400 rounded-2xl text-white  ">
              Logout
              <span className="p-[2px]">
                <FontAwesomeIcon icon={faUserMinus} />
              </span>
            </span>
          </button>
        </Link>
      ) : (
        <Link>
          <button
            data-testid="loginBtn"
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            className="pr-4 m-11"
            onClick={() => {
              setShowModel(!user1?.isLoggedIn);
            }}
          >
            <span className="py-2 px-2 pr-2 bg-green-400 rounded-2xl text-white ">
              Login
              <span className="p-[2px]">
                <FontAwesomeIcon icon={faUserPlus} />
              </span>
            </span>
          </button>
        </Link>
      )}
      {/* {
            isLoggedIn ? 
        <button onClick={()=> setIsLoggedIn(false)} data-testid="loginBtn" style={{borderColor: "burlywood",color: "black",backgroundColor: "#96cb96"}}>LOGIN</button> :

        <button onClick={()=> setIsLoggedIn(true)} style={{borderColor: "burlywood",color: "black",backgroundColor: "red"}}>LOGOUT</button>   
        } */}
      <Login
        isVisible={showModel}
        onClose={() => {
          setShowModel(false);
        }}
      />
    </div>
  );
};

export default Header;
