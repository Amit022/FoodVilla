const RestrauantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    costForTwoString,
    slaString,
    avgRating 
  }) => {
    return (
      <div className="w-60 p-8 m-4 h-80 shadow-2xl hover:scale-105 border-2 rounded-lg ">
        <img src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +cloudinaryImageId
            }/>
        <h2 className="font-bold text-1xl">{name}</h2>
        <h3 className="break-words">{cuisines.slice(0,4).join(",")}</h3>
        <h4>{lastMileTravelString}</h4>
        <span>
        <h3>{costForTwoString}</h3>
        </span>
        {/* <h3 style={{color: "#231b1b"}}>{slaString}</h3> */}
        {/* <h3 style={{color: "#231b1b"}}>{avgRating}</h3> */}
      </div>
    );
  };

  export default RestrauantCard;