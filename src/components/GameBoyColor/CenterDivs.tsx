import React from "react";

const CenterDivs = () => {
  return (
    <div>
      {" "}
      <div
        className="w-[8px] h-[15px]
top-[50%] left-[48%]
border-2 border-solid border-transparent bg-game-boy-d-pad
absolute  z-10 translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        className="w-[8px] h-[15px]
top-[50%] left-[32%]
border-2 border-solid border-transparent bg-game-boy-d-pad
absolute  z-10 translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>
  );
};

export default CenterDivs;
