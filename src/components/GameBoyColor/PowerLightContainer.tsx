import React from "react";

const PowerLightContainer = () => {
  return (
    <div className="w-9 h-7 absolute top-20 left-2">
      {/* power light container */}
      <div
        className="w-[3px] h-[3px] rounded-full bg-smaller-light absolute left-[3px]
top-[2px]"
      ></div>
      <div className="flex flex-row">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>
        <div
          className="w-2 h-2 rounded-full  bg-game-boy-dark shadow-[0px_2px_0px_0px_rgba(255,255,255,0.5)] -rotate-90 z-20
"
        ></div>
        <div
          className="w-2 h-2 rounded-full  bg-game-boy-dark  shadow-[0px_2px_0px_0px_rgba(255,255,255,0.5)] -rotate-90 z-10
"
        ></div>
        <div
          className="w-2 h-2 rounded-full  bg-game-boy-dark  shadow-[0px_2px_0px_0px_rgba(255,255,255,0.5)] -rotate-90
"
        ></div>
      </div>
      {/* power text */}
      <div className="font-extralight text-[rgba(255,255,255,0.5)] text-[9.5px] text-center mt-1">
        POWER
      </div>
    </div>
  );
};

export default PowerLightContainer;
