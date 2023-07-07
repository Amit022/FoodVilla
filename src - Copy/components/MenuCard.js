import { useDispatch } from "react-redux";
import { CARD_IMG_URL } from "../../constants";

const MenuCard = ({ name, cloudinaryImageId, description, price }) => {
  // console.log(name, cloudinaryImageId, description, price);
  const dispatch = useDispatch();
  const addItemsHandler = () => {
    dispatch(addItem);
  };
  return (
    <div className="flex">
      <div className="w-[250px]">
      {cloudinaryImageId === "" ? (
                    <img
                      className="w-60 ml-4 mt-3 rounded-2xl"
                      src="https://t3.ftcdn.net/jpg/00/70/49/52/360_F_70495270_2aJc2punK2LJVhMCU7zxJdjRaKBS6wjy.jpg"
                    />
                  ) : (
                    <img
                      className="w-60 ml-4 mt-3 rounded-2xl"
                      src={CARD_IMG_URL + cloudinaryImageId}
                    />
                  )}
        {/* <img
          className="w-60 ml-4 mt-3 rounded-2xl"
          src={CARD_IMG_URL + cloudinaryImageId}
        /> */}
      </div>
      <div className="m-4 w-[450] p-2">
        <h2 className="font bold text-md">{name}</h2>
        <h3>{description.slice(0,12)}</h3>
        <h3 style={{ fontSize: "14px" }}>₹{price / 100}</h3>
      </div>
      

      {/* <div>
        <button className="add-btn" onClick={()=> addItemsHandler()}>ADD</button>
      </div>
      <div style={{marginTop: "-49px",paddingLeft: "130px"}}>
        <button className="del-btn">Delete</button>
      </div> */}
    </div>
  );
};
export default MenuCard;
