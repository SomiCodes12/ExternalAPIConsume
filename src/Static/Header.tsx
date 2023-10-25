import { useState } from "react";
import { searchYouTubeAPI } from "../api/APIs";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  return (
    <div>
      <div className="w-full h-[80px] bg-gray-400 flex justify-center">
        <div className="w-[95%] h-[100%] flex  items-center">
          <div
            className={`rounded w-[100px] h-[50px] justify-center items-center ${
              !toggle ? "bg-black" : "bg-red-600"
            } flex text-white mx-2 hover:cursor-pointer`}
            onClick={() => {
              setToggle(true);
              setToggle1(false);
              setToggle2(false);

              searchYouTubeAPI("news").then((res) => {
                console.log(res);
                localStorage.setItem("youTube", JSON.stringify(res[0].news));
              });
            }}
          >
            News
          </div>
          <div
            className={`rounded w-[100px] h-[50px] justify-center items-center ${
              !toggle1 ? "bg-black" : "bg-red-600"
            }  flex text-white mx-2 hover:cursor-pointer`}
            onClick={() => {
              setToggle(false);
              setToggle1(true);
              setToggle2(false);

              searchYouTubeAPI("sports").then((res) => {
                console.log(res);
                localStorage.setItem("youTube", JSON.stringify(res[1].sports));
              });
            }}
          >
            Sports
          </div>
          <div
            className={`rounded w-[100px] h-[50px] justify-center items-center ${
              !toggle2 ? "bg-black" : "bg-red-500"
            } flex text-white mx-2 hover:cursor-pointer`}
            onClick={() => {
              setToggle(false);
              setToggle1(false);
              setToggle2(true);

              searchYouTubeAPI("games").then((res) => {
                console.log(res);
                localStorage.setItem("youTube" , JSON.stringify(res[2].games))
              })
            }}
          >
            Games
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
