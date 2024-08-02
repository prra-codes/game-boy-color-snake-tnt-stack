import React from "react";

const GameBoyColorText = () => {
  return (
    <div className="absolute top-[240px] left-12">
      <div className="flex gap-1 justify-center w-56">
        <div className="font-mono text-2xl text-game-boy-text font-bold -skew-x-6">
          GAME
        </div>
        <div className="font-mono text-2xl text-game-boy-text font-bold -skew-x-6 ">
          BOY
        </div>
        <div
          className={`flex justify-start items-baseline font-nunito font-bold tracking-[-3px] `}
        >
          <p className="text-2xl">
            <span className="text-[#D0125C]">C</span>
          </p>
          <p className="text-xl">
            <span className="text-[#692DD0]">O</span>
          </p>
          <p className="text-2xl skew-x-[10deg] skew-y-[-10deg]">
            <span className="text-[#88E63F] ">L</span>
          </p>
          <p className="text-xl">
            <span className="text-[#E6E14A]">O</span>
          </p>
          <p className="text-2xl">
            <span className="text-[#25869D]">R</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameBoyColorText;
