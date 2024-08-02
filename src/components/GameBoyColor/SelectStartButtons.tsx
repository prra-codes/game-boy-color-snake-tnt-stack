import React from "react";

const SelectStartButtons = () => {
  return (
    <div className="absolute w-28 h-16 left-1/2 -translate-x-1/2 top-36 ">
      <div className="w-full  flex justify-around">
        <div className="w-8 h-3 bg-game-boy-d-pad  rounded-md shadow-[inset_0px_0px_2px_0px_rgba(255,255,255,.4),inset_0px_0px_2px_0px_rgba(255,255,255,.4)] border-2 border-solid border-black"></div>
        <div className="w-8 h-3 bg-game-boy-d-pad  rounded-md shadow-[inset_0px_0px_2px_0px_rgba(255,255,255,.4),inset_0px_0px_2px_0px_rgba(255,255,255,.4)] border-2 border-solid border-black"></div>
      </div>
      <div className="flex justify-around">
        <div>
          <p className="font-mono text-xs select-start-shadow text-game-boy-blue">
            SELECT
          </p>
        </div>
        <div>
          <p className="font-mono text-xs select-start-shadow text-game-boy-blue">
            START
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectStartButtons;
