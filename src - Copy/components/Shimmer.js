// const Shimmer =()=> {
//     console.log("sbhdb")
//     return (
//         <div className="mt-[150px] h-[144px] w-[230px] " data-testid="shimmer">

//         {Array(15).fill("").map((e,index) => (
//             <div key={index} className="w-3/5 mt-2.5 h-[15px]"></div>))}
//         </div>
//     )
// }

// export default Shimmer;
const CardShimmer = () => {
  return (
    <div className="basis-[250px] p-2.5 mb-2.5 shadow-md animate-pulse bg-gray-200">
      <div className="h-[200px] w-[230px] bg-gray-300 mob:w-[130px] mob:h-[81px]"></div>
      <div className="w-3/5 mt-2.5 h-[15px]  bg-gray-300 "></div>
      <div className="w-4/5 mt-1 h-[15px]  bg-gray-300"></div>
      <div className="w-full mt-[18px] h-[15px]  bg-gray-300"></div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="container animate-pulse mt-[100px]">
      <div className="flex basis-full h-60 justify-evenly items-center p-8 bg-gray-300 ">
        <img className="h-[144px] w-[230px] bg-gray-400 " />
        <div className="flex flex-col basis-[540px] m-5 bg-gray-300">
          <h2 className="w-3/5 mt-2.5 h-[15px] bg-gray-400"></h2>
          <p className="w-4/5 mt-1 h-[15px] bg-gray-400"></p>
          <div className="w-4/5 mt-1 h-[15px] bg-gray-400"></div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-7 w-[848px]">
          <div className="p-5">
            <h3 className="shimmer-w40"></h3>
            <p className="shimmer-w20"></p>
          </div>
          <div className="menu-items-list  flex flex-col justify-evenly">
            {Array.from({ length: 4 }).map(
              (element, index) => (
                <div
                  className="flex justify-evenly w-[848px] p-2.5 mb-2.5 shadow animate-pulse bg-gray-200"
                  key={index}
                >
                  <div className="w-[438px] mt-[20px]">
                    <h3 className="w-3/5 mt-2.5 h-[15px] bg-gray-400"></h3>
                    <p className="w-4/5 mt-1 h-[15px] bg-gray-400"> </p>
                    <p className="w-4/5 mt-1 h-[15px] bg-gray-400"></p>
                  </div>
                  <div className="flex flex-col justify-center items-center w-[80px] h-[80px] mt-[20px] bg-gray-400">
                    <img className="w-[118px] h-[96px] bg-bio" />
                    <div className="w-[94px] h-[34px] mt-2.5 bg-bio"> </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="cart-widget"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-evenly mt-[130px]">
      {Array.from({ length: 10 }).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
